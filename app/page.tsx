import Image from "next/image";
import Navbar from './components/Navbar'
import { client } from './lib/sanity';

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
  title,
  smallDescription,
  "currentSlug": slug.current
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {

  const data = await getData();
  console.log(data)
  return (
    <>
      <Navbar />
      <h1>Hi there...</h1>
    </>
  );
}
