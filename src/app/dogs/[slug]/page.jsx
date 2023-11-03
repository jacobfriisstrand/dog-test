import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=" + params.slug);
  const data = await res.json();
  return {
    title: data.name,
    description: `Er ${data.age} år gammel`,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Dog({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  const data = await res.json();

  if (res.status != 200) return notFound();

  return (
    <main>
      <Image
        className="w-auto h-auto"
        src={data.image.url}
        placeholder="blur"
        blurDataURL={data.image.url}
        alt={data.name}
        width={data.image.width}
        height={data.image.height}
        sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             400px"
      />

      <h1 className="grid mb-2">
        Name <span>{data.name}</span>
      </h1>

      {/* {data.favouriteColor && (
        <p className="grid mb-2">
          Favourite color <span>{data.favouriteColor}</span>
        </p>
      )} */}
      <p className="grid mb-2">
        Favourite color<span>{data.favouriteColor ? data.favouriteColor : "Not specified"}</span>
      </p>

      <p className="grid mb-2">
        Age<span>{data.age}</span>
      </p>
    </main>
  );
}
