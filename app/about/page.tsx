import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center space-y-8">
          <Card className="border-2 border-primary bg-white w-full max-w-2xl dark:bg-background text-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto ">
              <p className="text-xl ">
                I am pursuing Bachelor&apos;s degree in Computer Science and Engineering from Kalinga institute of industrial technology
                University. I have a keen interest in web development and blockchain technology. I have been working on various
                projects to enhance my skills and knowledge in these fields.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-white w-full max-w-2xl dark:bg-background text-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto">
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="text-xl font-bold">Languages</span>: <span className="text-xl">JavaScript, TypeScript, Python, Solidity</span> </li>
                    <li><span className="text-xl font-bold">Frontend</span>: <span className="text-xl">React, Next, Tailwind, UI</span> </li>
                    <li><span className="text-xl font-bold">Backend</span>:<span className="text-xl">  Node, Express, Nest, fastapi </span></li>
                    <li><span className="text-xl font-bold">Gen-AI tools</span>:<span className="text-xl">  OpenAI, Llamaindex, LangChain</span></li>
                    <li><span className="text-xl font-bold">Databases</span>:<span className="text-xl"> MongoDB, PostgreSQL, MySQL</span></li>
                    <li><span className="text-xl font-bold">Tools</span>: <span className="text-xl"> Git, Docker, AWS, Vercel</span></li>
                </ul>
            </CardContent>

          </Card>

          <Card className="border-2 border-primary bg-white w-full max-w-2xl dark:bg-background text-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto">
              <ul className="list-disc list-inside space-y-2 ">

                <li><span className="text-xl">Freelance Web Developer, 2024-present</span></li>
                <li><span className="text-xl">Web Development Intern, Reluhash.Ai, Summer 2024</span></li>
                <li><span className="text-xl">Open Source Contributor, Various Projects, 2024-Present</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
