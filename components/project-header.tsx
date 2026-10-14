import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { ProjectMeta } from "@/lib/content";

export function ProjectHeader({ meta }: { meta: ProjectMeta }) {
  return (
    <header className="mb-10 space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">{meta.title}</h1>
      <p className="text-lg text-muted-foreground">{meta.summary}</p>

      <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <div>
          <dt className="text-muted-foreground">Status</dt>
          <dd className="font-medium capitalize">{meta.status}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Role</dt>
          <dd className="font-medium">{meta.role}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Period</dt>
          <dd className="font-medium">{meta.period}</dd>
        </div>
      </dl>

      <ul className="flex flex-wrap gap-2">
        {meta.stack.map((tech) => (
          <li key={tech}>
            <Badge variant="secondary">{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <a
          href={meta.repo}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          View code on GitHub
        </a>
        {meta.demo && (
          <a
            href={meta.demo}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Watch demo
          </a>
        )}
      </div>
    </header>
  );
}