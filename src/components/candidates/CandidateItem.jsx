import "./CandidateItem.module.scss";

const CandidateItem = ({ emailProp, avatarProp, nameProp }) => {
	return (
		<li>
			<img src={avatarProp} alt="" />
			<div>{nameProp}</div>
			<div>{emailProp}</div>
		</li>
	);
};

export default CandidateItem;
