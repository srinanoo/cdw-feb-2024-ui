// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import Function1, { Function2 } from './components/funcComp';
import ClassComp1 from './components/clsComp';
import FnForms from './components/fnForms';

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

  let menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

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

function App() {
  console.log("App Rendering...");
  return (
    <>
      {/* <Function1 name="Dinesh" age={20} menu={menus} userObj={{"name": "Dinesh", "age":20}} />
      <Function2 /> */}

      {/* <ClassComp1 name="Class Component" /> */}

      <FnForms />
    </>
  )
}

export default App
