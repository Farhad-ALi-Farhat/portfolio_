import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Farhad Ali Farhat</h1>
      <p className="text-muted-foreground">AI/ML engineer building production LLM systems</p>
      <Button>View my work</Button>
    </main>
  );
}