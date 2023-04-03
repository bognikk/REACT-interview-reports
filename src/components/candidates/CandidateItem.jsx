import "./CandidateItem.module.scss";
import { Link } from "react-router-dom";

const CandidateItem = ({ emailProp, avatarProp, nameProp, idProp }) => {
	return (
		<li>
			<Link to={`/reports/${idProp}`}>
				<img src={avatarProp} alt="" />
				<div>{nameProp}</div>
				<div>{emailProp.toLowerCase()}</div>
			</Link>
		</li>
	);
};

export default CandidateItem;
