import { Link } from "react-router-dom";

import "./Header.module.scss";

const Header = (props) => {
	return (
		<header>
			<h2>Interviews Reports</h2>
			<Link to="/">
				<button>Candidates</button>
			</Link>
		</header>
	);
};

export default Header;
