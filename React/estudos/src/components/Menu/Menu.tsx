import Link from "next/link";

export default function Menu() {
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Criador">Criador</Link></li>
            </ul>
        </nav>
    )
}