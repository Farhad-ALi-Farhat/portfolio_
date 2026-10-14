import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl flex-wrap gap-6 px-6 py-6 text-sm text-muted-foreground">
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-foreground"
        >
          Email
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}