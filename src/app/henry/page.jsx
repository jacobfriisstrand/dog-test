export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <img className="max-w-xs" src={data.image.url} alt={data.name} />
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
