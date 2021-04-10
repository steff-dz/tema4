import React from 'react'

const Day = ({ day }) => {
  return <div className={`${day.thisMonth ? 'thisMonth' : 'otherMonth'}`}>{day.num}</div>
}
export default Day
