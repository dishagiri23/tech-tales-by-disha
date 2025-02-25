
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = {
    launched: [
      {
        id: 1,
        title: "Tech Blog Platform",
        description: "A modern blog platform built with React and TypeScript",
        isLive: true,
        url: "https://tech-blog-platform.com",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing my work and skills",
        isLive: true,
        url: "https://portfolio-website.com",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60"
      },
    ],
    inProgress: [
      {
        id: 3,
        title: "AI Writing Assistant",
        description: "Smart writing tool powered by GPT-4",
        isInProgress: true,
        url: "#",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60"
      },
    ],
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my work, from completed projects to ongoing developments.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Launched</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.launched.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.isLive && (
                    <Badge variant="secondary">Live</Badge>
                  )}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">In Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.inProgress.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge>In Progress</Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-muted-foreground">
                  Coming soon
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
