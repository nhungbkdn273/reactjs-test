import React from 'react'
import { CalendarContainer } from './styles'
import Day from "../Day"
import { getDatesOfWeeks } from '../../utils/dates'

const WorkoutCalendar = () => {
  const datesOfWeeks = getDatesOfWeeks()

  return (
  <CalendarContainer>
    {datesOfWeeks.map(item => (
      <Day
      day={item.day}
      date={item.date}
      key={item.day}
    />
    ))}
  </CalendarContainer>
  )
}

export default WorkoutCalendar