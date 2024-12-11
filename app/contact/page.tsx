'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const {name,email,message} = formData;

    if(!name || !email || !message){
      toast.error('please fill out all the fields')
      return
    }
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error('Failed to submit form')
        }

        const data = await response.json()
        console.log('Response from server:', data)
        

        toast.success("message sent successfully")
        setFormData({ name: '', email: '', message: '' })
    } catch (error) {
        console.error('Error submitting form:', error)
        toast.error("Failed to send message. Please try again.")
    } finally {
        setIsSubmitting(false)
    }
  }


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                  </div>
                </div>
                {isSubmitting && <Button type="submit" className="mt-4 w-full" disabled>Sending...</Button>}
                {!isSubmitting && <Button type="submit" className="mt-4 w-full">Send Message</Button>}
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                    <span className='hover:underline cursor-pointer'>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwQZwBBsBCbKlrbXDspjlpbkDwkmNcTfPvGJNLcKpqmnMwbQPGKRCtKrftVvwFcWccMgmJC" target='_blank'>shounakm03@gmail.com</a>
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>+91 6204828332</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" />
                  <span>Odisha, India</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                I'm always open to new opportunities and collaborations. Don't hesitate to reach out!
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

