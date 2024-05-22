"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export const Nav: React.FC = () => {
    const currentPath = usePathname();
    // console.log({ currentPath })

    return <nav className="flex gap-12">
        <Link href="/" className={`${currentPath === '/' ? 'text-yellow-500' : 'text-neutral-400'} text-2xl font-medium font-roboto tracking-wide`}>Top Rated</Link>
        <Link href="/favorites" className={`${currentPath === '/favorites' ? 'text-yellow-500' : 'text-neutral-400'} text-2xl font-medium font-roboto tracking-wide`}>Favorites</Link>
    </nav>
}