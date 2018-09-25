import React from "react";
import axios from "axios";
const Context = React.createContext();

///action constants
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const EDIT_CONTACT = "EDIT_CONTACT";

const reducer = (state, action) => {
	switch (action.type) {
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					item => item.id !== action.payload
				)
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload.data]
			};
		case EDIT_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(
					item =>
						item.id === action.payload.id
							? (item = action.payload)
							: item
				)
			};
		default:
			return state;
	}
};
export class Provider extends React.Component {
	state = {
		contacts: [],
		dispatch: action => this.setState(state => reducer(state, action))
	};
	async componentDidMount() {
		const res = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);

		this.setState({ contacts: res.data });
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
