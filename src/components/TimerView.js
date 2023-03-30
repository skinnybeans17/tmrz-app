import React from "react";

export default function TimerView({ name, time, isRunning }) {
	return (
		<div>
			<h2>{name}</h2>
			<h1>{time}</h1>
            <h3>{isRunning}</h3>
			<button>Start</button>
		</div>
	)
}