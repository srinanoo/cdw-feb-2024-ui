// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { Suspense, createContext, useEffect, useState, lazy } from 'react';
import './App.css'
import Function1, { Function2 } from './components/funcComp';
import ClassComp1 from './components/clsComp';
import FnForms from './components/fnForms';
import ProjectsComp from './components/Projects/ProjectsComp';
import AboutComp from './components/About/AboutComp';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import LayoutPage from './pages/LayoutPage';
import CEOPage from './pages/About/CEOPage';
// const Card = lazy(() => {
//   return new Promise(resolve).then(() => import('./components/Card'));
// });

// const Card = React.lazy(async () => {
//     return new Promise(resolve => setTimeout(resolve, 5000)).then(() => import('./components/Card'))
// });

// function App() {
//   return (
//     <>
//       <div>Div 1 Container</div>
//     </>
//   )
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h3>Class Component</h3>
//       </>
//     )
//   }
// }

// function App() {
//   let name = "Dinesh";
//   let flag = false;
//   let logged = false;

  // let menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

//   let output = [];
//   for(let i = 0; i < menus.length; i++) {
//     output.push(<li key={i}>{menus[i]}</li>)
//   }
//   // console.log(output);

//   return (
//     <>
//       {
//         logged && <div>LOGGED IN</div>
//       }
//       {
//         flag
//           ?
//           <div>
//             My Name is: {name}
//           </div>
//           :
//           <ul>
//           {
//             menus.map((v, i) =>{
//               return (
//                 <li key={i}>{v}</li>
//               )
//             })
//           }
//           </ul>
//       }
      
//       {/* <ul>
//         {output}
//       </ul> */}
//     </>
//   )
// }

// function App() {
//   console.log("App Rendering...");
//   return (
//     <>
//       {/* <Function1 name="Dinesh" age={20} menu={menus} userObj={{"name": "Dinesh", "age":20}} />
//       <Function2 /> */}

//       {/* <ClassComp1 name="Class Component" /> */}

//       <FnForms />
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <div className="row1">
//         <div className="row1section1">
//             <div>
//                 <img src="images/Dinesh.jpg" alt="" className="logo" />
//             </div>
//             <div>
//                 <h3>Dinesh</h3>
//                 <div>Technical Trainer</div>
//                 <div>Web Developer</div>
//                 <div>Email Me</div>
//             </div>
//         </div>
//         <div className="row1section2">
//             <div>Projects</div>
//             <div>About Me</div>
//             <div>Contact Me</div>
//         </div>
//     </div>
//     <ProjectsComp />
//     <AboutComp />
//     <div className="row4">
//         <div>&copy; Copyright. All Rights Reserved.</div>
//     </div>
//     </>
//   )
// }

// function App() {
  // const [fact, setFact] = useState("");
  // const [country, setCountry] = useState("India");
  // const [universitiesList, setUniversitiesList] = useState([]);

//   const fetchData = () => {
//     // fetch('https://catfact.ninja/fact')
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     console.log(data);
//     //     setFact(data.fact)
//     //   })
//     axios.get('https://catfact.ninja/fact')
//       .then(res => {
//         console.log(res)
//         setFact(res.data?.fact)
//       });
//   }

  // const fetchUniversities = () => {
  //   axios.get(`http://universities.hipolabs.com/search?country=${country}`)
  //     .then(res => {
  //       console.log(res)
  //       if(JSON.stringify(universitiesList) !== JSON.stringify(res.data))
  //         setUniversitiesList(res.data)
  //     });
  // }

//   useEffect(() => {
//     console.log("useEffect...");
//     let timer = setInterval(fetchData, 5000);
//     // fetchData();
//     return () => {
//       clearInterval(timer);
//     }
//   }, []);

//   // useEffect(() => {
//   //   console.log("useEffect...");
//   //   // setInterval(fetchData, 5000);
//   //   fetchUniversities();
//   // }, []);

//   console.log("Function component...");
//   return (
//     <>
//       <h1>Cat Fact</h1>
//       {fact}
//       <p><button onClick={fetchData}>Show Fact</button></p>

//       <h3>Universities List for {country}</h3>
//       <p><input type="text" onChange={(e) => setCountry(e.target.value)} /></p>
//       <p><button onClick={fetchUniversities}>Show Universities</button></p>

//       {
//         universitiesList?.map((v, i) => {
//           return (
//             <div key={i}>
//               <div>{v.name}</div>
//               <div>{v.web_pages[0]}</div>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <p>React</p>
//       <button className='btn btn-primary'>Click</button>

//       <br /><br/>

//       <Button variant="primary">Primary</Button>{' '}
//     </>
//   )
// }

let LoginContext = createContext(null);

function App() {
  const [flag, setFlag] = useState(1);
  const [logged, setLogged] = useState(false);

  // console.log(location);
  return (
    <>
      <div>
        {/* <button onClick={() => setFlag(1)}>Home</button>
        <button onClick={() => setFlag(2)}>About</button>
        <button onClick={() => setFlag(3)}>Contact</button>
        <button onClick={() => setFlag(4)}>Blog</button> */}

        {/* <a href="/">Home</a> |
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a> |
        <a href="/blog">Blog</a> */}
      </div>
      {/* {location.pathname==="/" && <HomePage />}
      {location.pathname==="/about" && <AboutPage />}
      {location.pathname==="/contact" && <ContactPage />}
      {location.pathname==="/blog" && <BlogPage />} */}

      {/* <HeaderComp /> */}

      <BrowserRouter>
      {
        logged
          ?
          <p><button onClick={() => setLogged(false)}>Logout</button></p>
          :
          <p><button onClick={() => setLogged(true)}>Login</button></p>
      }
      <LoginContext.Provider value={logged}>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage age={20} subjects={"html"} />} />
            <Route path='/about/ceo' element={<CEOPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
        </LoginContext.Provider>
      </BrowserRouter>

      {/* <FooterComp /> */}
    </>
  )
}


// function App1() {
//   const [logged, setLogged] = useState(false);
//   return (
//     <>
//       {
//         logged
//           ?
//           <p><button onClick={() => setLogged(false)}>Logout</button></p>
//           :
//           <p><button onClick={() => setLogged(true)}>Login</button></p>
//       }
//       <LoginContext.Provider value={logged}>
//         <HomePage />
//         <ContactPage />
//         <AboutPage />
//         <BlogPage />
//       </LoginContext.Provider>
//     </>
//   )
// }

// function App() {

//   const [country, setCountry] = useState("India");
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

//   return (
//     <>
//       <h3>Universities List for {country}</h3>
//         <p><input type="text" onChange={(e) => setCountry(e.target.value)} /></p>
//         <p><button onClick={fetchUniversities}>Show Universities</button></p>

//       <Suspense fallback={<h2>Loading...</h2>}>
//           <Card data={universitiesList} />

//           {/* <div className="row">
//           {
//               universitiesList?.map((v, i) => {
//                   return (
//                   <div key={i} className="skSection">
//                       <div>{v.name}</div>
//                       <div>{v.web_pages[0]}</div>
//                   </div>
//                   )
//               })
//           }
//           </div> */}
//       </Suspense>
//     </>
//   )
// }



export default App
export {LoginContext};