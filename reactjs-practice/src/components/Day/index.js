import React, { useContext } from 'react'
import { DayWrapper, DayContainer, DayOfWeek, Date } from './styles'
import Workout from '../Workout'
import { WorkoutContext } from '../../App'
import { DAYS_OF_WEEK } from '../../constants/day'

const Day = ({ day, date }) => {
  const [state] = useContext(WorkoutContext)
  const days = state.days || []

  const currentDay = days.find(item => DAYS_OF_WEEK[new window.Date(item.date).getDay() - 1] === day) || {}
  return (
    <DayWrapper>
      <DayOfWeek>
        {day}
      </DayOfWeek>
      <DayContainer>
        <Date>
          {date.getDate()}
        </Date>
        {currentDay.workouts && currentDay.workouts.map(item => (
        <Workout
          key={day + "-" + item.id}
          workout={item}
          day={day}
          currentDay={currentDay}
        />
        ))}
      </DayContainer>
    </DayWrapper>
  )
}

export default Day