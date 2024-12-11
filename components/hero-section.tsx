import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background flex-grow flex items-center relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] opacity-25">
        {[...Array(1000)].map((_, i) => (
          <div key={i} className="border-r border-b border-primary/20"></div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-16">
          <div className="md:w-5/12 lg:w-1/3 mb-8 md:mb-0">
            <Image
              src="/myImg.jpeg?height=100&width=400"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-7/12 lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center md:text-left">Hello there,<br/> I&apos;m Shounak</h1>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground text-center md:text-left">
              I&apos;m a passionate web developer with expertise in React, Next.js, and Node.js. 
              I love creating beautiful, responsive, and user-friendly web applications.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild>
                <a href="/projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

