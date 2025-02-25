
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading frontend development team, implementing modern web solutions",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Built and maintained full-stack applications using React and Node.js",
    },
  ];

  const socialLinks = {
    twitter: "https://twitter.com/dishagiri", // Replace with your Twitter profile URL
    linkedin: "https://linkedin.com/in/dishagiri", // Replace with your LinkedIn profile URL
    github: "https://github.com/dishagiri" // Replace with your GitHub profile URL
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Hi, I'm Disha Giri. I'm a passionate developer focused on creating beautiful and functional web applications.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="grid gap-6">
          {experience.map((job, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription>{job.company} • {job.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Let's Connect</h2>
        <p className="text-muted-foreground">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex space-x-4">
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
