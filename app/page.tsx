import { ListWrapper } from "@/components/list"
import { Header } from "@/components/header";
export default async function Home() {

  const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7&page=1').then(res => res.json())

  // console.log({ movies })

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <ListWrapper page={movies.page} movies={movies.results} />
    </main>
  );
}
