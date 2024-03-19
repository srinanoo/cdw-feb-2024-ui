import { useEffect, useState } from "react";
import AxiosAPI from "../../../services/axiosApi";
import { useNavigate, useParams } from "react-router-dom";

export default function TraineesEdit() {
    const navigate = useNavigate();

    const params = useParams();
    console.log(params.id);

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");

    const [err, setError] = useState("");

    const handleUpdateTrainee = () => {
        let obj = {
            "name": name,
            "age": age,
            "phone": phone,
            "email": email
        };
        AxiosAPI.put("/trainees/updateTrainee", obj)
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

    useEffect(() => {
        AxiosAPI.get(`/trainees/readSpecificTrainee/?_id=${params.id}`)
            .then(results => {
                // setTrainees(data?.data?.data);
                console.log(results);
                setName(results?.data?.data[0].name);
                setAge(results?.data?.data[0].age);
                setPhone(results?.data?.data[0].phone);
                setEmail(results?.data?.data[0].email);
            });
    },[]);

    return (
        <>
            <div className="error">{err}</div>
            <p>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </p>
            <p>
                <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </p>
            <p>
                <input type="text" placeholder="Email" value={email} readOnly onChange={(e) => setEmail(e.target.value)} />
            </p>

            <p>
                <input type="button" value="Update Trainee" onClick={handleUpdateTrainee} />
            </p>
        </>
    )
}