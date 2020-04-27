import React, { useState } from "react";
import store from "./redux/store";
import { bugAdded, bugRemoved, changeFilter } from "./redux/actionCreators";
import { visibilityFilters } from "./redux/actionTypes";
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

	const filterState = (stateObj) => {
		switch (stateObj.visibilityFilter) {
			case visibilityFilters.SHOW_ACTIVE:
				return stateObj.bugs.filter((bug) => bug.resolved === false);

			case visibilityFilters.SHOW_COMP:
				return stateObj.bugs.filter((obj) => obj.resolved === true);

			default:
				return stateObj.bugs;
		}
	};

	store.subscribe(() => addTodo(filterState(store.getState())));

	const insertTodo = () =>
		store.dispatch(bugAdded(document.getElementById("input").value));

	const getAll = () => {
		store.dispatch(changeFilter(visibilityFilters.SHOW_ALL));
	};

	const getActive = () =>
		store.dispatch(changeFilter(visibilityFilters.SHOW_ACTIVE));

	const getCompleted = () =>
		store.dispatch(changeFilter(visibilityFilters.SHOW_COMP));

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
