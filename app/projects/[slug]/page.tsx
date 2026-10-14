import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import { getProject, getProjectSlugs } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) return {};
  const { meta } = getProject(slug);
  return { title: meta.title, description: meta.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) notFound();
  const { meta, content } = getProject(slug);

  return (
    <article className="prose max-w-none dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
      <h1>{meta.title}</h1>
      <p className="lead">{meta.summary}</p>
      <MDXRemote
        source={content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </article>
  );
}