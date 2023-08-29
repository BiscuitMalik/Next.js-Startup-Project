import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    //to send request to backend 
    //and fetch data by router.query.projectid

    return (
        <div>
            <h1>
                My Portfolio Page
            </h1>
        </div>
    );

}