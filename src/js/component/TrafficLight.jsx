import React, { useState } from "react";

export function TrafficLight() {
	const [selectedColor, setSelectedColor] = useState("");
	return (
		<div id="container">
			<div id="post"></div>
			<div id="box">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor === "red" ? " shine" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor === "yellow" ? " shine" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor === "green" ? " shine" : "")
					}></div>
			</div>
		</div>
	);
}
