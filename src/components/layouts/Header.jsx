import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

const Header = (props) => {
	return (
		<header className={classes.mainHeader}>
			<h2>Interviews Reports</h2>
			<Link to="/">
				<button>Candidates</button>
			</Link>
		</header>
	);
};

export default Header;
