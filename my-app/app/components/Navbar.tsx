import Link from "next/link";
import {type ReactNode} from "react"

type NavLinkProps={
    href : string
    children : ReactNode
}

function NavLink(props: NavLinkProps){
    return (
        <li className="text-white hover:text-red-500 mx-2 sm:mx-4 my-2 sm:my-0">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar(){
    return (
    <nav className="bg-black py-4">
        <ul className="list-none flex flex-col sm:flex-row justify-center items-center">
            <NavLink href="#contact"> Contact </NavLink>
            <NavLink href="#Experience"> Experience </NavLink>
            <NavLink href="#Skills"> Skills </NavLink>
            <NavLink href="#About"> About </NavLink>
        </ul>
    </nav>
    )
}