import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function CEOPage() {
    console.log(location);
    
    let { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("id"));

    return (
        <>
            <h3>CEO Page</h3>
        </>
    )
}