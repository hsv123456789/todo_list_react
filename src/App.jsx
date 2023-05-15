import { useState } from "react";

function App(){
  const [newItem,setNewItem] = useState("");
return <>
<form className=" flex justify-center  card  ">
  <div className=" p-12 flex flex-col gap-5">
    <label className=" text-slate-500 font-bold " htmlFor="item">New Item</label>
    <input type="text" value={newItem} onChange={(event) =>{setNewItem(event.target.value)}} id = "01" className="input input-bordered input-primary" />
    <button className="btn btn-primary">Add</button>
  </div>
</form>
<h1 className="font-bold text-3xl text-slate-500 p-12 pb-0 ">
  Todo List
</h1>
<ul className="p-12 pt-2 flex flex-col gap-2 ">
  <li className="flex gap-2">
  <label className="text-slate-500 font-bold flex gap-2  " >
    <input type="checkbox" className="checkbox checkbox-primary " />
    Item1</label>
    <button className="btn btn-error btn-sm">Delete</button>
  </li>
   <li className="flex gap-2">
   <label className="text-slate-500 font-bold flex gap-2  " >
    <input type="checkbox" className="checkbox checkbox-primary " />
    Item2</label>
    <button className="btn btn-error btn-sm">Delete</button>
   </li>


</ul>
</> 

}

export default App;