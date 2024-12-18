import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center space-y-8">
          <Card className="border-2 border-primary bg-white w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto dark:text-black">
              <p className="text-xl ">
                I hold a Bachelor&apos;s degree in Computer Science from a Kalinga institute of industrial technology
                University, where I honed my technical skills and gained a deep
                understanding of computer systems and software development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-white w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto">
                <ul className="list-disc list-inside space-y-2 dark:text-black">
                    <li><span className="text-xl font-bold">Languages</span>: <span className="text-xl">JavaScript, TypeScript, Python, Solidity</span> </li>
                    <li><span className="text-xl font-bold">Frontend</span>: <span className="text-xl">React, Next, Tailwind, UI</span> </li>
                    <li><span className="text-xl font-bold">Backend</span>:<span className="text-xl">  Node, Express, Nest, fastapi </span></li>
                    <li><span className="text-xl font-bold">Gen-AI tools</span>:<span className="text-xl">  OpenAI, Llamaindex, LangChain</span></li>
                    <li><span className="text-xl font-bold">Databases</span>:<span className="text-xl"> MongoDB, PostgreSQL, MySQL</span></li>
                    <li><span className="text-xl font-bold">Tools</span>: <span className="text-xl"> Git, Docker, AWS, Vercel</span></li>
                </ul>
            </CardContent>

          </Card>

          <Card className="border-2 border-primary bg-white w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground max-h-64 overflow-y-auto">
              <ul className="list-disc list-inside space-y-2 dark:text-black">

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
