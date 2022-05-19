// import { Component } from "react";
// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import Error from "./Components/Day3/Error";
// import Header from "./Components/Day3/Header";
// import StudentDetails from "./Components/Day3/StudentDetails";
// import Students from "./Components/Day3/Students";
// import TestHooks from "./Components/Day3/TestHooks";
import { NavLink } from 'react-router-dom';



//#region Day3
let FirstPage = ()=>{
    return (
        <div>
            {/* <h1>asdas</h1> */}
            <div className="text-center">
                <h1><NavLink to={"/artists"}>Music DB</NavLink></h1>
                <img src="/imagesDay3/albums/among_stars.jpg" alt="asd"></img>
            </div>
        {/* <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="" element={<Students/>}/>
                <Route path="/artists" element={<Students/>}/>
                <Route path="/artists/:id" element={<StudentDetails/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter> */}
        </div>
    )
}
export default FirstPage;
//#endregion