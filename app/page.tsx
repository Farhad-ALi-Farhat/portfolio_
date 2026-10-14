import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";


export default function Home() {
  return (
    <section className="flex flex-col items-start gap-4 py-12">
      <h1 className="text-4xl font-bold">Farhad Ali Farhat</h1>
      <p className="text-muted-foreground">AI/ML engineer building production LLM systems</p>
      <Link href="/projects/food-fusion" className={buttonVariants()}>
        View my work
      </Link>
    </section>
  );
}