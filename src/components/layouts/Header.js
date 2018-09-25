import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
	<div className="ui red inverted secondary  menu">
		<Link to="/" className="item">
			Contact Manager
		</Link>
		<div className="right menu">
			<Link to="/" className="ui item">
				<i className="home icon" />
				Home
			</Link>
			<Link to="/contacts/add" className="ui item">
				<i className="plus icon" /> add
			</Link>
			<Link to="/about" className="ui item">
				<i className="question circle icon" />
				About
			</Link>
		</div>
	</div>
);

export default Header;
