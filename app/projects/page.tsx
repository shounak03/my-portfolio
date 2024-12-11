import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'


export default function ProjectsSection() {
  const projects = [
    {
      title: "muSpace",
      description: "A collaborative music listening platform that allows users to queue songs and next song is played based on their votes.",
      image: "/muspace.png",
      tags: ["Next.js", "Typescript", "Posgresql", "prisma", "RestApi","Tailwind CSS" ,"Shadcn ui"],
      githubLink: "https://github.com/shounak03/muSpace-collaborative-music-listening-platform",
    //   liveLink: "https://ecommerce-platform-demo.vercel.app",
    },
    {
      title: "eduCrate",
      description: "A resource sharing platform. Do you feel you have great resources and want a price for them? eduCrate is the place to find them. Create a profile, add your course, share resources in a structured way and sell them.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "Typescript", "MongoDB", "RestApi","Tailwind CSS", "Shadcn ui"],
      githubLink: "https://github.com/shounak03/eduCrate",
      liveLink: "https://task-app-demo.vercel.app",
    },
    {
      title: "Briefly",
      description: "A tool that summarizes articles with the help pf AI. It uses llama3-8b model to generate accurate summaries. Got a url? get the summary, No url? Read the latest articles and get the summaries from our website.",
      image: "",
      tags: ["React.js", "fastapi","Llamaindex","GROQ","newsdata API", "Tailwind CSS"],
      githubLink: "https://github.com/shounak03/Briefly",
      liveLink: "https://weather-dashboard-demo.netlify.app",
    },
    {
      title: "Chat application",
      description: "A simple realtime chat application. Create account, invite your friends, chat with them.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "javascript", "Firebase", "CSS"],
      githubLink: "https://github.com/shounak03/realtime-chat-app/",
      liveLink: "https://your-blog-demo.com",
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
                {/* <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

