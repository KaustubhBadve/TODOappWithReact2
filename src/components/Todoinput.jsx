import React from 'react'

const Todoinput = ({addTodo}) => {
  const [value,setValue]=React.useState("")
  return (
    <div>
    <input placeholder='Enter New TODO' value={value} type="text" onChange={(e)=>{setValue(e.target.value)}}/>
    <button onClick={()=>{addTodo(value); setValue("")}}
    >add</button>
    </div>
  )
}

export default Todoinput