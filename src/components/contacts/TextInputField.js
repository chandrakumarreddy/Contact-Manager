import React from "react";
import PropTypes from "prop-types";

const TextInputField = ({
	type,
	name,
	placeholder,
	stateData,
	handleChange,
	error
}) => (
	<div className={error ? "field error" : "field"}>
		<label htmlFor={name}>
			{name.charAt(0).toUpperCase() + name.substring(1)}
		</label>
		<input
			name={name}
			placeholder={placeholder}
			type={type}
			onChange={handleChange}
			value={stateData}
		/>
	</div>
);

TextInputField.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	stateData: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	handleChange: PropTypes.func.isRequired,
	error: PropTypes.string
};
export default TextInputField;
