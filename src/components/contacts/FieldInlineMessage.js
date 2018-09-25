import React from "react";

const FieldInlineMessage = ({ type, content }) => (
	<div
		style={{
			color: type === "error" ? "#9F3A38" : "#6597A7",
			paddingBottom: "5px"
		}}
	>
		{content}
	</div>
);

export default FieldInlineMessage;
