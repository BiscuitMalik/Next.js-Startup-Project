import { useRouter } from "next/router"

export default function SelectedClientPage() {

    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>
                This is Selected Client Page
            </h1>
        </div>
    )
}