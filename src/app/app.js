import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice'
import { update } from '../features/timers/timersSlice';
import { loadState, saveState } from '../utils/persistState'
import throttle from 'lodash/throttle'

export const store = configureStore({
	reducer: {
		timers: timersReducer
	},
	preloadedState: loadState() // 5
})

let lastUpdateTime = Date.now()

setInterval(() => {
	const now = Date.now()
	const deltaTime = now - lastUpdateTime
	lastUpdateTime = now
	store.dispatch(update(deltaTime))
}, 500)

store.subscribe(throttle(() => {
	saveState(store.getState())
  }, 1000));