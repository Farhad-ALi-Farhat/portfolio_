import Link from "next/link";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/lib/content";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="space-y-16">
      <section className="space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground">{profile.tagline}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects/food-fusion" className={buttonVariants()}>
            View my work
          </Link>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            LinkedIn
          </a>
          <DownloadCvButton />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured project</h2>
        {featured.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}