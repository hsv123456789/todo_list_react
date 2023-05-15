import { useState } from "react";
export default function NewTodoForm(props) {
    const [newItem,setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault()
       if(newItem === "") return 
       
        props.onSubmit(newItem) 

        setNewItem("")
      }
    return (
        <form className=" flex justify-center  card  " onSubmit={handleSubmit}>
  <div className=" p-12 flex flex-col gap-5">
    <label className=" text-slate-500 font-bold " htmlFor="item">New Item</label>
    <input type="text" value={newItem} onChange={(event) =>{setNewItem(event.target.value)}} id = "01" className="input input-bordered input-primary" />
    <button className="btn btn-primary">Add</button>
  </div>
</form>
    )
}