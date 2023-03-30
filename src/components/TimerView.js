import React from "react";
import { useDispatch } from 'react-redux'
import { toggleTimer } from "../features/timers/timersSlice"; 

export default function TimerView({ index, name, time, isRunning }) {
	const dispatch = useDispatch()

	const formatTime = (time) => {
		let hours = Math.round(time / 1000 / 60 / 60)
		let minutes = Math.round(time / 1000 / 60 % 60)
		let seconds = Math.round(time / 1000 % 60)
		if (seconds < 10) {
			seconds = `0${seconds}`
		}
		if (minutes < 10) {
			minutes = `0${minutes}`
		}
		if (hours < 10) {
			hours = `0${hours}`
		}
		return `${hours}:${minutes}:${seconds}`
	}
	return (
		<div>
			<h2>{name}</h2>
			<h1>{formatTime(time)}</h1>
			<button
				onClick={() => dispatch(toggleTimer(index))}
			>
				{isRunning? "Stop" : "Start"}
			</button>
		</div>
	)
}