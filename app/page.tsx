import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-start gap-4 py-12">
      <h1 className="text-4xl font-bold">Farhad Ali Farhat</h1>
      <p className="text-muted-foreground">AI/ML engineer building production LLM systems</p>
      <Button>View my work</Button>
    </section>
  );
}