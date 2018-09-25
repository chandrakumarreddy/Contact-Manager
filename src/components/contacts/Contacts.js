import React, { Fragment } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends React.Component {
	render() {
		return (
			<Consumer>
				{value => (
					<Fragment>
						<h1>
							<span style={{ color: "red" }}>Contacts </span>
							List
						</h1>
						{value.contacts.map(contact => (
							<Contact key={contact.id} contact={contact} />
						))}
					</Fragment>
				)}
			</Consumer>
		);
	}
}

export default Contacts;
