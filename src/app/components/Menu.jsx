import Link from "next/link";
export default async function Menu() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();
  console.log(pages);
  return (
    <nav className= "bg-blue-200 p-10 sticky top-0">
      <ul className="flex gap-4 items-center">
        <li>
          <Link prefetch={false} href="/">
            Home
          </Link>
        </li>
        {pages.map((page) => {
          return (
            <li key={page.slug}>
              <Link href={`/dogs/${page.slug}`}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
