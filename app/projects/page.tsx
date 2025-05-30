import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'


export default function ProjectsSection() {
  const projects = [
    {
      title: "muSpace",
      description: "A collaborative music listening platform that allows users to queue songs and next song is played based on their votes.",
      image: "/muspace.png",
      tags: ["Next.js", "Typescript", "Posgresql", "Prisma", "RestApi","Tailwind" ,"Shadcn","Vercel"],
      githubLink: "https://github.com/shounak03/muSpace",
      liveLink: "https://www.muspace.xyz/",
    },
    {
      title: "Yumm&Healthy",
      description: "A recipe generation application that allows users to generate for recipes based on ingredients, dietary restrictions, and cuisine types. Users can also save their favorite recipes and genrate recipes for upcoming weeks.",
      image: "",
      tags: ["Nextjs", "Typescript","Gemini","Supabase","shadcn","Vercel"],
      githubLink: "https://github.com/shounak03/YummAndHeathy-v1",
      liveLink: "https://yumm-and-heathy-v1.vercel.app/",
    },

    {
      title: "AI Notes",
      description: "It is an ai based note taking application. save your notes, generate summary and chat with your notes with our chat bot, Try it for free",
      image: "/muspace.png",
      tags: ["Next.js", "Typescript", "Supabase", "Rag", "Gemini", "Pgvector" ,"Shadcn","Vercel"],
      githubLink: "https://ai-notes-ten.vercel.app/",
      liveLink: "https://ai-notes-v1.vercel.app/",
    },
    {
      title: "eduCrate",
      description: "A resource sharing platform. Do you feel you have great resources and want a price for them? eduCrate is the place to find them. Create a profile, add your course, share resources in a structured way and sell them.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "Typescript", "MongoDB", "RestApi","Tailwind", "Shadcn","Vercel"],
      githubLink: "https://github.com/shounak03/eduCrate",
      // liveLink: "https://task-app-demo.vercel.app",
    },
    
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Here are some of my projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              {/* <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader> */}
              <CardContent className="flex-grow mt-4">
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                {project.liveLink && <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

