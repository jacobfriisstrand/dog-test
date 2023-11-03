import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Er ${data.age} år gammel`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <Image
        className="w-auto h-auto"
        src={data.image.url}
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
      <p className="grid mb-2">
        Favourite color<span>{data.favouriteColor}</span>
      </p>
      <p className="grid mb-2">
        Age<span>{data.age}</span>
      </p>
    </main>
  );
}
