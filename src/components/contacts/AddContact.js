import React from "react";
import axios from "axios";
import * as EmailValidator from "email-validator";
import { Consumer } from "../../context";
import TextInputField from "./TextInputField";
import FieldInlineMessage from "./FieldInlineMessage";

class AddContact extends React.Component {
	state = {
		data: {
			name: "",
			email: "",
			phone: ""
		},
		errors: []
	};
	handleChange = e => {
		this.setState({
			...this.state,
			data: {
				...this.state.data,
				[e.target.name]:
					e.target.type === "number"
						? Number(e.target.value)
						: e.target.value
			}
		});
	};
	validate = data => {
		const errors = {};
		if (!data.name) errors.name = "Name can't be empty";
		if (!EmailValidator.validate(data.email))
			errors.email = "Please check your Email";
		if (!data.phone) errors.phone = "phone can't be empty";
		return errors;
	};
	submit = async (dispatch, e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			const res = await axios.post(
				"https://jsonplaceholder.typicode.com/users",
				this.state.data
			);
			const data = res.data;

			dispatch({
				type: "ADD_CONTACT",
				payload: { data }
			});

			this.setState({ data: { name: "", email: "", phone: "" } });
			this.props.history.push("/");
		}
	};
	render() {
		return (
			<Consumer>
				{value => (
					<form
						className="ui form"
						onSubmit={this.submit.bind(this, value.dispatch)}
					>
						<TextInputField
							placeholder="name"
							type="text"
							stateData={this.state.data.name}
							name="name"
							handleChange={this.handleChange}
							error={this.state.errors.name}
						/>
						{this.state.errors.name && (
							<FieldInlineMessage
								type="error"
								content={this.state.errors.name}
							/>
						)}
						<TextInputField
							name="email"
							placeholder="Email"
							type="text"
							stateData={this.state.data.email}
							handleChange={this.handleChange}
							error={this.state.errors.email}
						/>
						{this.state.errors.email && (
							<FieldInlineMessage
								type="error"
								content={this.state.errors.email}
							/>
						)}
						<TextInputField
							name="phone"
							placeholder="phone Number"
							type="number"
							handleChange={this.handleChange}
							stateData={this.state.data.phone}
							error={this.state.errors.phone}
						/>
						{this.state.errors.phone && (
							<FieldInlineMessage
								type="error"
								content={this.state.errors.phone}
							/>
						)}
						<button
							className="ui button"
							type="submit"
							style={{ width: "100%" }}
						>
							Submit
						</button>
					</form>
				)}
			</Consumer>
		);
	}
}

export default AddContact;
