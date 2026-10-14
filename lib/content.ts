import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  status: z.string(),
  role: z.string(),
  period: z.string(),
  stack: z.array(z.string()),
  repo: z.string().url(),
  demo: z.string().optional(),
  featured: z.boolean().default(false),
});

export type ProjectMeta = z.infer<typeof projectSchema>;

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProject(slug: string) {
  const raw = fs.readFileSync(path.join(projectsDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const meta = projectSchema.parse(data); // throws if frontmatter is wrong
  return { meta, content };
}