// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../App.css/"

// eslint-disable-next-line react/prop-types
const Addtodo=({tododata,settododata})=>{
    const[todotitle,settodotitle]=useState("")
    const[tododescription,settododescription]=useState("")

    const addtododetails=()=>{
        const newdetails={
            title:todotitle,
            description:tododescription,
            status:"Non-Complete"
        }
        settododata([...tododata,newdetails])
        settodotitle("")
        settododescription("")
    }
return(
    <div className="inputform">
        
        <input type="text" placeholder="Task" className="ititle" value={todotitle} onChange={(e)=>settodotitle(e.target.value)}/>
        <input type="text" placeholder="Task Description" className="idescription" value={tododescription} onChange={(e)=>settododescription(e.target.value)}/>
        <button className="abtn" onClick={addtododetails}>Add</button>
       
    </div>
)
}
export default Addtodo
