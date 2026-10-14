import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import { ProjectHeader } from "@/components/project-header";
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
    <>
      <ProjectHeader meta={meta} />
      <article className="prose max-w-none dark:prose-invert prose-code:before:content-none prose-code:after:content-none prose-img:h-auto prose-img:w-full prose-img:rounded-lg prose-img:border prose-img:bg-white prose-img:p-4">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
    </>
  );
}