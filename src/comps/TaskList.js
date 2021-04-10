import React from 'react'
import Task from './Task'

const TaskList = ({ setTasks, tasks, filteredTasks }) => {
  return (
    <div className="taskListContainer">
      <ul className="taskList">
        {filteredTasks.map((task) => (
          <Task setTasks={setTasks} tasks={tasks} key={task.id} task={task} text={task.text} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
