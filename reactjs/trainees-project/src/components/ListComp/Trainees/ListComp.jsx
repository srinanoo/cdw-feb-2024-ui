import { useState } from "react"
import AxiosAPI from "../../../services/axiosApi"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TraineesListComponent() {
    const [Trainees, setTrainees] = useState([]);

    const navigate = useNavigate();

    const fetchData = () => {
        AxiosAPI.get("/trainees/readTrainees")
            .then(data => {
                setTrainees(data?.data?.data);
            });
    }

    useEffect(() => {
        fetchData();
    },[]);

    const handleEdit = (e) => {
        console.log(e.target.getAttribute("data-edit"));
        navigate(`/trainees/edit/${e.target.getAttribute("data-edit")}`);
    }

    const handleDelete = (e) => {
        if(confirm("Are you sure you want to delete?")) {
            console.log(e.target.getAttribute("data-edit"));
            AxiosAPI.delete("/trainees/deleteTrainee", { data: { email: e.target.getAttribute("data-delete")}})
                .then(results => {
                    console.log(results);
                    if(results?.data?.msg === "Trainee deleted successfully!") {
                        alert(results.data.msg);
                        fetchData();
                    }
                });
        }
    }

    return (
        <>

            <div className="flexTrainee">
                <div className="rowTrainee header">
                    <div>Id</div>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Phone</div>
                    <div>Email</div>
                    <div>Actions</div>
                </div>
            {
                Trainees.map((trainee, index) => {
                    return (
                        <div key={index} className="rowTrainee">
                            <div>{trainee._id}</div>
                            <div>{trainee.name}</div>
                            <div>{trainee.age}</div>
                            <div>{trainee.phone}</div>
                            <div>{trainee.email}</div>
                            <div>
                                <button data-edit={trainee._id} onClick={handleEdit}>Edit</button> <button data-delete={trainee.email} onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}