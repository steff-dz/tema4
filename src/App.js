import React, { useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './styles/app.scss'
import Nav from './comps/Nav'
import TaskPage from './comps/TaskPage'
import Calender from './comps/Calender'
import ExtraPage from './comps/Extrapage'

function App() {
  //States for input, tasks, completion status, and display filtering pga status-----------------------------
  const [inputTxt, setInputTxt] = useState('')
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [status, setStatus] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState([])

  //Updates display based off changes to tasks and satus, runs the filtering function-------------------------
  useEffect(() => {
    filterHandler()
  }, [tasks, status])

  //Function for filtered display-----------------------------------------------------------------------------
  const filterHandler = () => {
    if (status === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.completed === true))
    } else if (status === 'uncompleted') {
      setFilteredTasks(tasks.filter((task) => task.completed === false))
    } else {
      setFilteredTasks(tasks)
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="pageContainer">
          <Switch>
            <Route exact path="/task-app">
              <TaskPage
                setStatus={setStatus}
                setTasks={setTasks}
                tasks={tasks}
                filteredTasks={filteredTasks}
                setInputTxt={setInputTxt}
                inputTxt={inputTxt}
              />
            </Route>

            <Route exact path="/Calender">
              <Calender />
            </Route>

            <Route exact path="/extrapg">
              <ExtraPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
