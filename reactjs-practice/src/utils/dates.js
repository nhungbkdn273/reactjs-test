import { DAYS_OF_WEEK } from "../constants/day"

export const getDatesOfWeeks = () => {
  const daysOfWeeks = []
  const current = new Date();
  var weekstart = current.getDate() - current.getDay(); 

  DAYS_OF_WEEK.forEach((day, index) => {
    
    daysOfWeeks.push({
      day,
      date: new Date(current.setDate(weekstart + index + 1))
    })
  })

  return daysOfWeeks
}