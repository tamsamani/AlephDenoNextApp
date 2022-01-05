import React from "react";
import classnames from "classnames";

const Header = ({className, children, ...props}) => {
	return <div className={classnames("", className)} {...props} >
		{ children || "Header Here" }
	</div>
};



export default Header;