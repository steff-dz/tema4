import React from 'react'
import Quote from './Quote'
import Form from './Form'
import Filter from './Filter'
import TaskList from './TaskList'

const TaskPage = ({ setStatus, setTasks, tasks, filteredTasks, setInputTxt, inputTxt }) => {
  return (
    <div className="taskPageContainer">
      <h1>To Do List.</h1>
      <Quote />
      <section>
        <Filter setStatus={setStatus} />
        <TaskList setTasks={setTasks} tasks={tasks} filteredTasks={filteredTasks} />
      </section>
      <Form setInputTxt={setInputTxt} inputTxt={inputTxt} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TaskPage
