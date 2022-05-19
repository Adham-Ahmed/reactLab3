import { useEffect, useState } from "react";

let TestHooks = ()=>{
    console.log("Renderd")
    // let userName = "";
    // console.log(useState(0));
    let [userName, setUserName] = useState("KOKO");
    let [counter, setCounter] = useState(0);
    let [studentName, setStudentName] = useState("");
    
    /**
     * ComponentDidMount ===> useEffect(()=>{},[])
     * ComponentDidUpdate ===> useEffect(()=>{})
     */

    //ComponentDidMount
    useEffect(()=>{//Fetch API
        console.log("Mounted")
    },[]);
    //ComponentDidUpdate
    useEffect(()=>{
        console.log("Updated Successfully")
        // setCounter(++counter);
    });

    //When Counter Updated
    useEffect(()=>{
        console.log("Counter Updated")
    },[counter]);
    // json-server --watch db.json
    return (
        <div>
            <input
                value={userName}
                placeholder="Enter Name"
                onChange={(e)=>{setUserName(e.target.value)}}
            />
            <input
            value={studentName}
            onChange={(e)=>{setStudentName(e.target.value)}}
            />
            {userName}
            <div>
                <button className="btn btn-outline-dark" onClick={()=>{setCounter(++counter)}}> + </button>
                <span> {counter} </span>
                <button className="btn btn-outline-dark" onClick={()=>{setCounter(--counter)}}> - </button>
            </div>

        </div>
    )
}

export default TestHooks;