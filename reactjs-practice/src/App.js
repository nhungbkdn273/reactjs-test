import React, { useState } from "react"
import "./App.css"

import Board from "./components/Board"
import { initialState } from "./constants/mocks"

export const WorkoutContext = React.createContext([{}, () => {}])

function App() {
  const [workouts, setWorkouts] = useState(initialState)

  return (
    <div className="App">
      <WorkoutContext.Provider value={[workouts, setWorkouts]}>
        <Board />
      </WorkoutContext.Provider>
    </div>
  )
}

export default App
