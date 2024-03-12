import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "true");
        navigate("/");
    }

    return (
        <>

            <button onClick={handleLogin}>Login</button>
        </>
    )
}