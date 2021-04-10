import React from 'react'

const Filter = ({ setStatus }) => {
  //this is capturing the value of the filtering select bar and setting the Status State to that value
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="selectContainer">
      <select onChange={statusHandler} name="tasks">
        <option value="all">Display All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}

export default Filter
