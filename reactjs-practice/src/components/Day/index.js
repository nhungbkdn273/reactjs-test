import React from "react"
import PropTypes from "prop-types"

import { Draggable } from "react-beautiful-dnd"

import { isToday } from "../../utils/utilities"

import { DayWrapper, DayContainer, DayOfWeek, Date } from "./styles"
import Workout from "../Workout"

const Day = ({ day, date, dayRef, currentDay, ...droppableProps }) => (
  <DayWrapper ref={dayRef} {...droppableProps}>
    <DayOfWeek>{day}</DayOfWeek>
    <DayContainer>
      <Date isToday={isToday(date)}>{date.getDate()}</Date>
      {currentDay.workouts &&
        currentDay.workouts.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => {
              return (
                <Workout
                  key={day + "-" + item.id}
                  workout={item}
                  day={day}
                  currentDay={currentDay}
                  workoutRef={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                />
              )
            }}
          </Draggable>
        ))}
    </DayContainer>
  </DayWrapper>
)

Day.defaultProps = {
  dayRef: () => {},
  currentDay: {},
}

Day.propTypes = {
  dayRef: PropTypes.func,
  currentDay: PropTypes.object,
  day: PropTypes.string.isRequired,
  date: PropTypes.object,
}

export default Day
