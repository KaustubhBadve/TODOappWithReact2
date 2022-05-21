import React from 'react'

const Todolist = ({children}) => {
  return (
    <div><h3>Here is Your TODO List</h3>
    <ul>{children}</ul>
    </div>
  )
}

export default Todolist