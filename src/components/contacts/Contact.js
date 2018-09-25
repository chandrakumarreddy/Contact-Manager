import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

const customStyles = {
	deleteFloatRight: {
		float: "right",
		color: "#ff0011",
		cursor: "pointer"
	},
	editFloatRight: {
		float: "right",
		color: "#000",
		cursor: "pointer",
		marginRight: "1em"
	}
};
class Contacts extends React.Component {
	state = {
		toggleDetails: false
	};
	toggleContact = () => {
		this.setState({ toggleDetails: !this.state.toggleDetails });
	};
	deleteContact = async (id, dispatch) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

		dispatch({ type: "DELETE_CONTACT", payload: id });
	};
	render() {
		const { contact } = this.props;
		return (
			<Consumer>
				{value => (
					<div className="ui segments">
						<div className="ui segment">
							<p>
								{contact.name}{" "}
								<i
									className={
										this.state.toggleDetails
											? "sort up icon"
											: "sort down icon"
									}
									onClick={this.toggleContact}
								/>
								<i
									className="ui close icon"
									style={customStyles.deleteFloatRight}
									onClick={() =>
										this.deleteContact(
											contact.id,
											value.dispatch
										)
									}
								/>
								<Link
									to={`/contacts/edit/${contact.id}`}
									style={customStyles.editFloatRight}
								>
									<i className="edit icon" />
								</Link>
							</p>
						</div>
						{this.state.toggleDetails && (
							<div className="ui segment">
								<p>
									Email :- {contact.email} | phone :-{" "}
									{contact.phone}
								</p>
							</div>
						)}
					</div>
				)}
			</Consumer>
		);
	}
}
Contacts.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phone: PropTypes.oneOfType([
			PropTypes.string.isRequired,
			PropTypes.number.isRequired
		])
	})
};
export default Contacts;
