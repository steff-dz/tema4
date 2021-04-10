import React from 'react'

const Form = ({ setInputTxt, inputTxt, tasks, setTasks }) => {
  //Receives input and stores it into the input State
  const inputHandler = (e) => {
    setInputTxt(e.target.value)
  }

  //Creates each task object with text holding the inputted Text
  const submitTaskHandler = (e) => {
    e.preventDefault()
    if (inputTxt.length === 0) {
      alert('You are trying to submit a blank task! Please write a task in the text field')
    } else {
      setTasks([...tasks, { id: Math.random() * 100, text: inputTxt, completed: false }])
      setInputTxt('')
    }
  }

  return (
    <form>
      <input
        value={inputTxt}
        onChange={inputHandler}
        className="inputBar"
        type="text"
        placeholder={'write a task here!'}
      />
      <button onClick={submitTaskHandler} type="submit" className="submitBtn">
        <i className="fas fa-plus-circle" />
      </button>
    </form>
  )
}

export default Form
