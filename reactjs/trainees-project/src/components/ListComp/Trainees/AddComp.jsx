import { useState } from "react";
import AxiosAPI from "../../../services/axiosApi";
import { useNavigate } from "react-router-dom";

export default function TraineesAdd() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");

    const [err, setError] = useState("");

    const handleAddTrainee = () => {
        let obj = {
            "name": name,
            "age": age,
            "phone": phone,
            "email": email
        };
        AxiosAPI.post("/trainees/createTrainee", obj)
            .then(results => {
                console.log(results);
                if(results.data?.msg !== "") {
                    alert(results.data.msg);
                    navigate("/trainees");
                } else if(results.data?.error !=="") {
                    setError(results.data.error);
                }
            });
    }

    return (
        <>
            <div className="error">{err}</div>
            <p>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            </p>
            <p>
                <input type="number" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            </p>
            <p>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </p>

            <p>
                <input type="button" value="Add Trainee" onClick={handleAddTrainee} />
            </p>
        </>
    )
}