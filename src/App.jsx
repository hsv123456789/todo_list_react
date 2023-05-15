import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

function App(){
  
  const [todos,setTodos] = useState([]);
  

  function toggleTodo(id ,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>{
        if (todo.id == id){
          todo.completed  = completed
          return {...todo,completed}
        }
        return todo
      })
    })

  }
  function addTodo(title) {
    
        setTodos([...todos,{id:crypto.randomUUID(),title:title,completed:false}])
        console.log(todos)
     
  }
  function deleteTodo(id) {
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
return <>
<NewTodoForm onSubmit = {addTodo}/>
<h1 className="font-bold text-3xl text-slate-500 p-12 pb-0 ">
  Todo List
</h1>
<ul className="p-12 pt-2 flex flex-col gap-2 ">
{todos.map(todo=>{
  return(
    <li className="flex gap-2" key={todo.id}>
   <label className="text-slate-500 font-bold flex gap-2  " >
     <input type="checkbox" className="checkbox checkbox-primary " checked={todo.completed}  onChange={e=>toggleTodo(todo.id,e.target.checked)}/>
     {todo.title}</label>
     <button className="btn btn-error btn-sm" type="submit " onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
   </li>
  )
  
})}

  
   

</ul>
</> 

}

export default App;