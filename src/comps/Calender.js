import React, { useState } from 'react'
import Day from './Day'

//Arrays for months and weekdays----------------------------------------------------------------------------
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
//The calender component below------------------------------------------------------------------------------
const Calender = () => {
  let [date, setDate] = useState(new Date())
  new Date(date.setDate(1))

  const monthHandler = (increment) => {
    let month = date.getMonth() + increment

    setDate((prevDate) => {
      let newDate = new Date(prevDate.getTime())
      newDate.setMonth(month)
      return newDate
    })
  }

  //Variables for different date types--------------------------------------------------------------
  const year = date.getFullYear()
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  const firstDayIndex = date.getDay()
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  const nextDays = 7 - lastDayIndex - 1
  const today = new Date().toDateString()

  //Creating arrays to store dates from previous, current and next month--------------------------
  let prevDays = []
  for (let i = firstDayIndex; i > 0; i--) {
    let data = prevLastDay - i + 1
    prevDays.push({ num: data, thisMonth: false })
  }

  let daysArray = []
  for (let i = 1; i <= lastDay; i++) {
    daysArray.push({ num: i, thisMonth: true })
  }

  let nextDaysArr = []
  for (let i = 1; i <= nextDays; i++) {
    nextDaysArr.push({ num: i, thisMonth: false })
  }

  return (
    <div className="calPageContainer">
      <div className="calenderContainer">
        <div className="calTitleContainer">
          <i
            tabindex="0"
            onKeyDown={() => monthHandler(-1)}
            onClick={() => monthHandler(-1)}
            className="fas fa-angle-left prev"
          />
          <div className="calHeader">
            <p id="year">{year}</p>
            <h2>{months[date.getMonth()].toUpperCase()}</h2>
            <p id="today">{today}</p>
          </div>
          <i
            onKeyDown={() => monthHandler(-1)}
            tabindex="0"
            onClick={() => monthHandler(1)}
            className="fas fa-angle-right next"
          />
        </div>
        <div className="weekDaysContainer">
          {weekDays.map((weekday) => (
            <div>{weekday}</div>
          ))}
        </div>
        <div className="daysContainer">
          {prevDays.map((day, i) => (
            <Day key={i} day={day} />
          ))}
          {daysArray.map((day, i) => (
            <Day day={day} key={i} />
          ))}
          {nextDaysArr.map((day, i) => (
            <Day key={i} day={day} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Calender
