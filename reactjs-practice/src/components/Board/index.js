import React, { useContext } from "react"
import { CalendarContainer } from "./styles"
import Day from "../Day"
import { WorkoutContext } from "../../App"

import {
  getDatesOfWeeks,
  reorder,
  move,
  findDataByDay,
} from "../../utils/utilities"

import { DragDropContext, Droppable } from "react-beautiful-dnd"

const Board = () => {
  const [state, setState] = useContext(WorkoutContext)
  const days = state.days || []
  const datesOfWeeks = getDatesOfWeeks()

  const getList = (dayId) => days.find((d) => d.id === dayId)
  function onDragEnd(result) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = source.droppableId
    const dInd = destination.droppableId

    if (sInd === dInd) {
      let sDay = getList(sInd)
      const reorderList = reorder(
        getList(sInd).workouts,
        source.index,
        destination.index
      )
      const sDayIndex = days.indexOf(sDay)
      sDay = {
        ...sDay,
        workouts: reorderList,
      }
      days[sDayIndex] = {
        ...sDay,
      }
      const newState = {
        days: [...days],
      }
      setState(newState)
    } else {
      let sDay = getList(sInd)
      let dDay = getList(dInd)
      const result = move(sDay.workouts, dDay.workouts, source, destination)
      const sDayIndex = days.indexOf(sDay)
      const dDayIndex = days.indexOf(dDay)
      sDay = {
        ...sDay,
        workouts: result.sourceList,
      }
      days[sDayIndex] = {
        ...sDay,
      }
      dDay = {
        ...dDay,
        workouts: result.destList,
      }
      days[dDayIndex] = {
        ...dDay,
      }
      const newState = {
        days: [...days],
      }
      setState(newState)
    }
  }

  return (
    <CalendarContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {datesOfWeeks.map((item) => {
          const day = item.day
          const currentDay = findDataByDay(days, day)

          return (
            <Droppable droppableId={currentDay.id} key={currentDay.id}>
              {(provided) => (
                <>
                  <Day
                    day={day}
                    date={item.date}
                    dayRef={provided.innerRef}
                    currentDay={currentDay}
                    {...provided.droppableProps}
                  />
                </>
              )}
            </Droppable>
          )
        })}
      </DragDropContext>
    </CalendarContainer>
  )
}

export default Board
