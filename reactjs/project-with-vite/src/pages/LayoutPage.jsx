import { Outlet } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

export default function LayoutPage(props) {
    return (
        <>
            <HeaderComp />
            
            <Outlet />

            <FooterComp />
        </>
    )
}