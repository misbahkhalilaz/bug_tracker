import React from "react";
import store from "./redux/store";
import { bugResolved, bugRemoved } from "./redux/actionCreators";
import { icons } from "./icons";
import { InputGroup, Button } from "react-bootstrap";

function Getlist(props = {}) {
	if (props.arr.length === 0) return <i>Add Bugs... Or Change View...</i>;
	return props.arr.map((obj) => (
		<InputGroup key={obj.id} style={{ marginTop: "10px" }}>
			<InputGroup.Prepend>
				<InputGroup.Text
					style={{ backgroundColor: obj.resolved ? "#c3fba5" : "#c8daf7" }}
				>
					{obj.resolved ? (
						<span onClick={() => store.dispatch(bugResolved(obj.id))}>
							{icons.checked}
						</span>
					) : (
						<span onClick={() => store.dispatch(bugResolved(obj.id))}>
							{icons.check}
						</span>
					)}
				</InputGroup.Text>
			</InputGroup.Prepend>
			<InputGroup.Text
				style={{ backgroundColor: obj.resolved ? "#c3fba5" : "#c8daf7" }}
			>
				{obj.description}
			</InputGroup.Text>
			<InputGroup.Append>
				<Button
					variant={obj.resolved ? "warning" : "danger"}
					onClick={() => store.dispatch(bugRemoved(obj.id))}
				>
					{icons.delete}
				</Button>
			</InputGroup.Append>
		</InputGroup>
	));
}

export default Getlist;
