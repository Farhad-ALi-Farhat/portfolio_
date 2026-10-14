import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/profile";
import { DownloadCvButton } from "@/components/download-cv-button";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground">{profile.summary}</p>
        <DownloadCvButton />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        {profile.experience.map((job) => (
          <div key={job.company} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {job.role}, {job.company}
              </h3>
              <span className="text-sm text-muted-foreground">{job.period}</span>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Other work</h2>
        <div className="grid gap-4">
          {profile.otherProjects.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        {profile.skills.map((s) => (
          <div key={s.group} className="space-y-2">
            <h3 className="text-sm font-medium">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Education</h2>
        {profile.education.map((e) => (
          <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-2">
            <p>
              {e.degree}, {e.school}
            </p>
            <span className="text-sm text-muted-foreground">{e.period}</span>
          </div>
        ))}
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Get in touch</h2>
        <p className="text-muted-foreground">
          Open to AI/ML and LLM engineering roles. The best way to reach me is
          email:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-foreground underline underline-offset-4"
          >
            {profile.email}
          </a>
        </p>
      </section>
    </div>
  );
}