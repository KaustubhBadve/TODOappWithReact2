import React from 'react'

const Todoitem = ({value,deleteitem}) => {
  return (
    <li>{value}
    <button onClick={()=> deleteitem(value)}>Delete</button></li>
  )
}

export default Todoitem