import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedCompRouter() {
    const token = localStorage.getItem('token');

    if(token) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}