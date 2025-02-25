
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
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing my work and skills",
        isLive: true,
      },
    ],
    inProgress: [
      {
        id: 3,
        title: "AI Writing Assistant",
        description: "Smart writing tool powered by GPT-4",
        isInProgress: true,
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
            <Card key={project.id} className="card-hover">
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
                  href="#"
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
            <Card key={project.id} className="card-hover">
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
