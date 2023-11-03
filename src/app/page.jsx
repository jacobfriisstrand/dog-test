export const dynamic = "force-dynamic"; // Server side rendering
// export const dynamic = "force-static"; // Static site generation

export const metadata = {
  title: "Home",
  description: "This is the home page",
};

export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1>This is a random dog</h1>
      <img src={data.message} alt="Random dog" />
    </main>
  );
}
