import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import PostList from "@/components/PostList/PostList";

async function getData() {
  const res = await fetch("https://gold-anemone-wig.cyclic.app/receitas/todas");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Header message="Bem Vindo ao Sistema de Contagem" />
      <main>
        <Card />
        <PostList data={data} />
      </main>
    </>
  );
}
