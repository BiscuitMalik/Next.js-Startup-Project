import { useRouter } from "next/router";

export default function ClientProjectPage() {
    const router = useRouter()
    console.log(router.query);

    function loadprojecthandler() {
        //load data 
        router.push({
            pathname: "/client/[id]/[clientprojectid]",
            query: { id: 'max', clientprojectid: 'ProjectA' },
        })
    }


    return (
        <div>
            <h1>
                The Project Of The Given client
            </h1>
            <button onClick={loadprojecthandler}>
                Load Project A
            </button>

        </div >
    );
}