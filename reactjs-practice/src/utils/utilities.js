import { DAYS_OF_WEEK } from "../constants/day"

export const getDatesOfWeeks = () => {
  const daysOfWeeks = []
  const current = new Date()
  var day = current.getDay(),
    diff = current.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday

  DAYS_OF_WEEK.forEach((day, index) => {
    daysOfWeeks.push({
      day,
      date: new Date(current.setDate(diff + index)),
    })
  })

  return daysOfWeeks
}

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  return {
    sourceList: sourceClone,
    destList: destClone,
  }
}

export const isToday = (date) => {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export const findDataByDay = (days, day) =>
  days.find((d) => {
    const currentWeekDay = new window.Date(d.date).getDay()
    if (!currentWeekDay && day === DAYS_OF_WEEK[6]) {
      return d
    }
    if (DAYS_OF_WEEK[new window.Date(d.date).getDay() - 1] === day) {
      return d
    }

    return null
  })
