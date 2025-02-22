"use client"
import Link from "next/link";

function Header(){
    return(
        <header className="flex justify-between">
            <div>
                <h2 className="text-3x1 font-semibold">My Website
                </h2>
            </div>
            <nav>
                <ul className="flex gap-x-4">
                    <li>
                       <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;