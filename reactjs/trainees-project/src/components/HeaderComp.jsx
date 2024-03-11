import { NavLink } from "react-router-dom";
import './HeaderComp.scss';

export default function HeaderComp() {
    return (
        <>
            <div className="row">
                <div>LOGO</div>
                <div className="menus">
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/trainers">Trainers</NavLink></li>
                            <li><NavLink to="/trainees">Trainees</NavLink></li>
                            <li><NavLink to="/batches">Batches</NavLink></li>
                            <li><NavLink to="/classes">Classes</NavLink></li>
                            <li><NavLink to="/topics">Topics</NavLink></li>
                            <li><button>Logout</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}