import { createSlice } from '@reduxjs/toolkit'
import Timer from './Timer'

const initialState = {
  value: []
}

export const timersSlice = createSlice({
    name: 'timers',
    initialState,
    reducers: {
  
      addTimer: (state, action) => {
        state.value.push(new Timer(action.payload))
      },
  
          toggleTimer: (state, action) => {
            console.log(state.value, action.payload)
              state.value[action.payload].isRunning = !state.value[action.payload].isRunning
          },

          update: (state, action) => {
            state.value.forEach(timer => {
              if (timer.isRunning) {
                timer.time += action.payload
              }
            })
          },
          reset: (state, action) => {
            state.value[action.payload].time = 0
            state.value[action.payload].isRunning = false
          }
    },
  })

// Action creators are generated for each case reducer function
export const { addTimer, toggleTimer, update, reset } = timersSlice.actions

export default timersSlice.reducer