import React from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'
import Todoitem from './Todoitem'
import {v4 as uuid4} from 'uuid' 


const Todoapp = () => {
  const [todos,setTodos]=React.useState([])

  const addTodo=((newtodo)=>{
    return(setTodos([...todos,{
      id:uuid4(),
      value:newtodo
    }])) 
  })

  const deleteitem=((value)=>
   {
     setTodos(todos.filter((todo)=>todo.value!==value))
   }
  )

  return (
    <div>
      TODOApp
    <Todoinput addTodo={addTodo}/>
    <Todolist >
      <ul>
          {todos.map((todo)=>(
            <Todoitem key={todo.id} value={todo.value} deleteitem={deleteitem}/>
          )
          )}</ul>
    </Todolist>
    </div>
  )
}

export default Todoapp