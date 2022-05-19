import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-light" style={{ backgroundColor: "#333" }}>
			<div className="container-fluid">
				<Link to="/">#100DaysOfCode - React Redux Fake Store App</Link>
			</div>
		</nav>
	);
};

export default Header;
