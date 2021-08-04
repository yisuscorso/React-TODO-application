import React from "react";

export default Home;

//import React from "react";

import { ToDoList } from "./ToDoList";

export function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<h1 className="text-center">TODO</h1>
					<ToDoList />
				</div>
			</div>
		</div>
	);
}
