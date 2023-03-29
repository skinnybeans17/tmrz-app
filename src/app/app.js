import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/Timers/timersSlice'

export const store = configureStore({
	reducer: {
		timers: timersReducer
	}
})