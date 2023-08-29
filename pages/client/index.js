import { useRouter } from "next/router"
import Link from "next/link";

export default function ClinetPage() {
    const router = useRouter();
    const client = [
        { id: "max", name: "Maxmilin" },
        { id: "manu", name: "Manuel" },
    ]

    return (
        <div>
            <h1>
                Hello Client Page
            </h1>
            <ul>
                {client.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: "/client/[id]",
                            query: { id: client.id },

                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}