import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 bg-blue-200 p-10">
      <Link prefetch={false} href="/">
        Home
      </Link>
      <Link prefetch={false} href="/henry">
        Henry
      </Link>
      <Link prefetch={false} href="/">
        About
      </Link>
      <Link prefetch={false} href="/">
        Contact
      </Link>
    </footer>
  );
}
