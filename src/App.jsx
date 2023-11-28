// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect} from 'react'
import Addtodo from './component/addtodo'
import Edittodo from './component/edittodo'
import Filtertodo from './component/filter'
import "./App.css/"

function App() {
  document.title="REACT TO DO TASK" 
   
    const data=[
    {
        title : "DAY 1 JAVASCRIPT TASK",
        description :"JavaScript - Day -1: Introduction to Browser & web",
        status:"Complete"
    },


]

    const[show,setshow]=useState(true)
    const[editid,seteditid]=useState("")
    const[filtertext,setfiltertext]=useState("")
    const [tododata,settododata]=useState(data)
 
    // status change
    const handlestatuschange=(id,event)=>{
          tododata[id].status = event.target.value
          settododata([...tododata])
           
         }

//handle delete
const handledelete=(id)=>{
   const remaintodo= tododata.filter((val,idx) => idx!==id)
settododata(remaintodo)}

//handle edit
const handleedit=(id)=>{
    setshow(false)
    seteditid(id)
}

//handle filter
 let filterproduct=tododata.filter((val)=>{
     if(filtertext === "Complete"){
         return val.status === "Complete"
     }else if(filtertext === "Non-Complete"){
         return val.status === "Non-Complete"
    }else{
         return val.status 
    }

 })

   const onfiltervalue=(filtervalue)=>{
     setfiltertext(filtervalue)
   }

  return(

    <div className="main">
        <div className="title">
            <h1>REACT TO DO TASK</h1>
        </div>
        {show===true? (<Addtodo
         tododata={tododata}
         settododata={settododata}/>) :  (<Edittodo
            tododata={tododata}
            settododata={settododata}
            show={show}
            setshow={setshow}
            editid={editid}/>)}
          { <Filtertodo
          onfiltervalue={onfiltervalue}
          />}

    {(
    <>
    <div className="cards">
    {filterproduct?.map((value,idx)=> (
        <div className="card" key={idx}>
            <h2>{value.title}</h2>
            <p className='des'>{value.description}</p>

        
            <select  onChange={(e)=> handlestatuschange(idx,e) } className='dd'name="status" >
                {value.status == "Complete" ? (<option value="Complete">Complete</option>) :
                 (<option value="Non-Complete">Non-Complete</option>)}

                {value.status == "Non-Complete" ? (<option value="Complete"> Complete </option>):
                (<option value="Non-Complete"> Non-Complete </option>)}
            </select>
        
        <div className="btn">
            <button className='ebtn' onClick={()=>handleedit(idx)}>Edit</button>
            <button className='delbtn' onClick={()=>handledelete(idx)}>Delete</button>
        </div>
        </div>))}
        </div>
    </>
  )}
  </div>
    )
}

export default App
