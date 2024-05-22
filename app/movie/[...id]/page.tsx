import { Header } from "@/components/header"
import { Movie } from "@/components/movie";

interface PageProps {
    params: {
        id: string[];
    };
}

export default async function Page(props: PageProps) {

    // console.log({ props, id: props?.params?.id?.join("/") })
    const id = props?.params?.id?.join("/") || "1"
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a74169393e0da3cfbc2c58c5feec63d7`).then(res => res.json())

    // console.log({ movie })

    return <main className="flex min-h-screen flex-col items-center">
        <Header />
        <Movie {...movie} />
    </main>
}