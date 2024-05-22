import Link from "next/link"
import { Logo } from "@/components/logo"
import { Nav } from "@/components/nav"

export function Header() {
    return <header className="flex p-[30px] pt-[60px] w-full">
        <div className="max-w-4xl w-full flex m-auto justify-between items-end">
            <Link href="/"><Logo /></Link>
            <Nav />
        </div>
    </header>
}