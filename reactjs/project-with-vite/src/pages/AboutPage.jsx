// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { LoginContext } from "../App";
// import PropTypes from 'prop-types';

// export default function AboutPage(props) {
//     const logged = useContext(LoginContext)
//     return (
//         <>
//             <h1>About Page</h1>

//             {/* {logged.toString()} */}
//             {props.name.slice(0, 5)}

//             {/* <NavLink to="/about/ceo">About CEO</NavLink> */}
//         </>
//     )
// }

// AboutPage.propTypes = {
//     "name": PropTypes.string,
//     "age": PropTypes.number,
//     "active": PropTypes.bool,
//     "subjects": PropTypes.oneOf(["html", "css"])
// }

// AboutPage.defaultProps = {
//     "name": "",
//     "age": 0,
//     "active": false
// }


export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
        </>
    )
}