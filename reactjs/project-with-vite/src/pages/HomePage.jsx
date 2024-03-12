// import React, { lazy, useContext, useEffect, useState } from "react"
// // import { LoginContext } from "../App"
// import { Suspense } from "react";
// import axios from "axios";
// import './HomePage.css';
// // const Card = React.lazy(async () => {
// //     return new Promise(resolve => setTimeout(resolve, 3000)).then(() => import('../components/Card'));
// // });

// export default function HomePage() {

//     const logged = useContext(LoginContext);
//     const [country, setCountry] = useState("India");
//     const [universitiesList, setUniversitiesList] = useState([]);

//     const fetchUniversities = () => {
//         axios.get(`http://universities.hipolabs.com/search?country=${country}`)
//         .then(res => {
//             console.log(res)
//             if(JSON.stringify(universitiesList) !== JSON.stringify(res.data))
//             setUniversitiesList(res.data)
//         });
//     }

//     useEffect(() => {
//         setTimeout(fetchUniversities, 5000);
//     }, [universitiesList]);

//     // console.log(logged);
//     return (
//         <>
//             <h1>Home Page</h1>

//             {
//                 logged && <p>User Logged In</p>
//             }

//             {/* <h3>Universities List for {country}</h3>
//             <p><input type="text" onChange={(e) => setCountry(e.target.value)} /></p>
//             <p><button onClick={fetchUniversities}>Show Universities</button></p> */}

//             {/* <Suspense fallback={<Skeleton />}> */}
//                 {/* <Card data={universitiesList} /> */}

//                 {/* <div className="row">
//                 {
//                     universitiesList?.map((v, i) => {
//                         return (
//                         <div key={i} className="skSection">
//                             <div>{v.name}</div>
//                             <div>{v.web_pages[0]}</div>
//                         </div>
//                         )
//                     })
//                 }
//                 </div> */}
//             {/* </Suspense> */}
//         </>
//     )
// }

// // function Skeleton() {
// //     return (
// //         <>
// //             <div className="row">
// //                 <div className="skSection">
// //                     <div>
// //                         <div className="skTitle"></div>
// //                         <div className="skImg"></div>
// //                         <div className="skDescription"></div>
// //                     </div>
// //                 </div>
// //                 <div className="skSection">
// //                     <div>
// //                         <div className="skTitle"></div>
// //                         <div className="skImg"></div>
// //                         <div className="skDescription"></div>
// //                     </div>
// //                 </div>
// //                 <div className="skSection">
// //                     <div>
// //                         <div className="skTitle"></div>
// //                         <div className="skImg"></div>
// //                         <div className="skDescription"></div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

export default function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}