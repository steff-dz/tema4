import React from 'react'

const Task = ({ text, task, tasks, setTasks }) => {
  //function for deleting tasks by filtering out all the tasks that do not have the selected task id
  const deleteHandler = () => {
    setTasks(tasks.filter((item) => item.id !== task.id))
  }

  // this function first checks/validates itself by matching IDs, then it reverses the "completed" propety
  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  return (
    <div className="taskContainer">
      <button
        arial-label={'checkmark click for completing the task'}
        onClick={completeHandler}
        className="completedBtn"
      >
        <i className={`${task.completed ? 'fas fa-check' : 'far fa-square'}`} />
      </button>
      <li className={`${task.completed ? 'taskCompleted' : ''}`}>{text}</li>
      <button aria-label={'Click to delete'} onClick={deleteHandler} className="deleteBtn">
        <i className="fas fa-minus-square" />
      </button>
    </div>
  )
}

export default Task
