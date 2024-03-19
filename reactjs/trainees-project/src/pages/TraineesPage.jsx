import { useNavigate } from "react-router-dom";
import TraineesListComponent from "../components/ListComp/Trainees/ListComp";


export default function TraineesPage() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/trainees/add");
    }
    return (
        <>
            <h1 style={{"textAlign": "center"}}>Trainees</h1>

            <div>
                <button onClick={handleRedirect}>Add Trainee</button>
            </div>
            <br />
            <TraineesListComponent />
        </>
    )
}