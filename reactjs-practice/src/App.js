import React, { useState } from "react"
import "./App.css"

import WorkoutCalendar from "./components/WorkoutCalendar"
import { initialState } from "./constants/mocks"

export const WorkoutContext = React.createContext([{}, () => {}])

function App() {
  const [workouts, setWorkouts] = useState(initialState)

  return (
    <div className="App">
      <WorkoutContext.Provider value={[workouts, setWorkouts]}>
        <WorkoutCalendar />
      </WorkoutContext.Provider>
    </div>
  )
}

export default App
