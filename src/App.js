import { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Error from "./Components/Day3/Error";
import Header from "./Components/Day3/Header";
import StudentDetails from "./Components/Day3/StudentDetails";
import Students from "./Components/Day3/Students";
import TestHooks from "./Components/Day3/TestHooks";
// import FirstComponent from "./Components/Day1/FirstComponent";
// import Header from "./Components/Day1/Header";
// import Header from "./Components/Day2/Routing/Header";
// import Search from "./Components/Day2/ComponentInteraction/Search";
// import Students from "./Components/Day2/ComponentInteraction/Students";
// import StudentsList from './Components/Day2/ComponentInteraction/students.json'
// import Users from './Components/Day2/Routing/Users'
// import USerDetails from './Components/Day2/Routing/USerDetails'
// import About from './Components/Day2/Routing/About'
// import Error from './Components/Day2/Routing/Error'
// import UserDetails from "./Components/Day2/Routing/USerDetails";
// import LifeCycel from "./Components/Day3/LifeCycle";

//#region Day1
// let App= ()=>{
//     console.log(StudentsList.students)
//     return(
//         <div>
//             {/*<FirstComponent/> */}
//             {/* APP */}
//              <Header/>
//             <Search onKeyChange = />
//             <Students/>
//         </div>
//     )
// }

//#endregion


//#region Day2

//#region Component Interaction
// class App extends Component{
//     constructor (){
//         super();
//         this.state = {
//             AllStudents:StudentsList.students,//Original Array
//             Filterd:StudentsList.students,
//         }
//     }
//     ReciveTextChange = (text)=>{
//         // console.log(text);
//         let FilterdList = this.state.AllStudents.filter((student)=>student.name.toLowerCase().includes(text.toLowerCase()))
//         this.setState({Filterd:FilterdList});
//     }
//     render(){
//         return(
//             <div>
//                 <Header/>
//                 <Search onKeyChange = {this.ReciveTextChange}/>
//                 <Students studentsList = {this.state.Filterd}/>
//             </div>
//         )
//     }
// }

// export default App;
//#endregion

//#region Routing
// let App = ()=>{
//     return(
//         <BrowserRouter>
//             <Header/>
//             <Routes>
//                 <Route path="" element={<Users/>}/>
//                 <Route path="/users" element={<Users/>}/>
//                 <Route path="/users/:id" element={<UserDetails/>}/>
//                 <Route path="/about" element={<About/>}/>
//                 <Route path="*" element={<Error/>}/>
//             </Routes>
//             {/* <switch>
//                 <Route path="/users/:id" Component={}/>
//                 <Route path="/users" Component={}/>
//                 <Route path="/about" Component={}/>
//                 <Route path="/" Component={}/>
//                 <Route path="*" Component={}/>
//             </switch> */}
//         </BrowserRouter>
//     )
// }
// export default App;
//#endregion

//#endregion


//#region Day3
let App = ()=>{
    return (
        // <BrowserRouter>
        // <NavLink to={""}>Comp</NavLink>
        // <NavLink to={"/header"}>Header</NavLink>
        // <Routes>
        //     <Route path="" element={<LifeCycel/>}/>
        //     <Route path="/life" element={<LifeCycel/>}/>
        //     <Route path="/header" element={<Header/>}/>
        // </Routes>
        //     {/* <div> */}
        //         {/* App */}
        //         {/* <LifeCycel/> */}
        //     {/* </div> */}
        // </BrowserRouter>
        // <div>
        //     App
        // </div>

        <BrowserRouter>
            {/* <TestHooks/> */}
            <Header/>
            <Routes>
                <Route path="" element={<Students/>}/>
                <Route path="/artists" element={<Students/>}/>
                <Route path="/artists/:id" element={<StudentDetails/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
//#endregion