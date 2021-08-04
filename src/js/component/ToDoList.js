import React, { useState } from "react";

export const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState([]);
	const listaItems = taskList.map((item, index) => {
		return (
			<div key={index}>
				<li className="Lista">
					{item}
					<i
						className="Lista2"
						onClick={() => {
							let holder = taskList.filter(
								(task, i) => i != index
							);
							setTaskList(holder);
						}}></i>
				</li>
			</div>
		);
	});
	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={e => setTaskList([...taskList, inputValue])}>
				Añadir
			</button>
			<ul className="list-group">{listaItems}</ul>
		</div>
	);
};
