/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css/"
const Filtertodo=(props)=>{
    const filterdata=(status)=>{ 
     props.onfiltervalue (status)
    
        
    }
    return(
        <div className="filter">
            <h5>STATUS FILTER : </h5>
            <select onChange={(e)=>filterdata(e.target.value)} id="sfilter">
                <option id="All" value="All">All</option>
                <option id="Complete" value="Complete">Complete</option>
                <option id="Non-Complete" value="Non-Complete">Non-Complete</option>
            </select>
        </div>
    )
}
export default Filtertodo