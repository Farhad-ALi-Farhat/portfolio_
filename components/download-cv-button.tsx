import { buttonVariants } from "@/components/ui/button";

export function DownloadCvButton() {
  return (
    <a
      href="/resume.pdf"
      download="Farhad-Ali-Farhat-CV.pdf"
      className={buttonVariants({ variant: "outline" })}
    >
      Download CV
    </a>
  );
}