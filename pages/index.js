import Link from "next/link";

export default function MyhomePage() {

    return (
        <div>
            <h1>
                Hello Home
            </h1>
            <ul>
                <li>
                    <Link href="portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li>
                    <Link href="client">Client</Link>
                </li>
                <li>
                    <Link href="blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}