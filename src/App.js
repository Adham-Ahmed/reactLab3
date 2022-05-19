import { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Error from "./Components/Day3/Error";
import FirstPage from "./Components/Day3/FirstPage";
import Header from "./Components/Day3/Header";
import StudentDetails from "./Components/Day3/StudentDetails";
import Students from "./Components/Day3/Students";
// import TestHooks from "./Components/Day3/TestHooks";



//#region Day3
let App = ()=>{
    return (
        <BrowserRouter>
            {/* <TestHooks/> */}
            <Header/>
            <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/artists" element={<Students/>}/>
                <Route path="/artists/:id" element={<StudentDetails/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
        // <FirstPage></FirstPage>
    )
}
export default App;
//#endregion