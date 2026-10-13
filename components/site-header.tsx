import Link from "next/link";

const links = [{ href: "/about", label: "About" }];
// Add more links here as pages get built, so nothing points to a 404.

export function SiteHeader() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Farhad Ali Farhat
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}