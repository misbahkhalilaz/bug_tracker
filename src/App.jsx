import React, { useState } from "react";
import store from "./redux/store";
import { bugAdded, bugRemoved } from "./redux/actions";
import { icons } from "./icons";
import Getlist from "./GetList";
import {
	Card,
	InputGroup,
	FormControl,
	Button,
	ButtonGroup,
} from "react-bootstrap";

function App() {
	const [todo, addTodo] = useState([]);

	store.subscribe(() => addTodo(store.getState()));

	const insertTodo = () =>
		store.dispatch(bugAdded(document.getElementById("input").value));

	const getAll = () => {
		addTodo(store.getState());
	};

	const getActive = () =>
		addTodo(store.getState().filter((obj) => obj.resolved === false));

	const getCompleted = () =>
		addTodo(store.getState().filter((obj) => obj.resolved === true));

	const removeSelected = () => {
		todo.forEach((obj) =>
			obj.resolved ? store.dispatch(bugRemoved(obj.id)) : null
		);
	};

	return (
		<Card id="card">
			<Card.Header>
				<Card.Text>
					<h1 style={{ textAlign: "center" }}>Bug Tracker</h1>
				</Card.Text>
				<InputGroup className="mb-3">
					<FormControl
						type="text"
						as="input"
						placeholder="Bug Description"
						id="input"
					/>
					<InputGroup.Append>
						<Button onClick={insertTodo}>{icons.add}</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Header>
			<Card.Body>
				<Getlist arr={todo} />

				<Button
					variant="outline-danger"
					size="sm"
					style={{ marginTop: "10px" }}
					onClick={removeSelected}
					block
				>
					Delete Selected
				</Button>
			</Card.Body>
			<Card.Footer>
				<InputGroup className="mb-3" style={{ paddingLeft: "100px" }}>
					<InputGroup.Prepend>
						<InputGroup.Text>View:</InputGroup.Text>
					</InputGroup.Prepend>
					<ButtonGroup>
						<Button variant="outline-info" onClick={getAll}>
							All
						</Button>
						<Button variant="outline-info" onClick={getActive}>
							Active
						</Button>
						<Button variant="outline-info" onClick={getCompleted}>
							Resolved
						</Button>
					</ButtonGroup>
				</InputGroup>
			</Card.Footer>
		</Card>
	);
}

export default App;
