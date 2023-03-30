const CandidateItem = ({ emailProp, avatarProp, nameProp }) => {
	return (
		<li>
			<div>
				<img src={avatarProp} alt="" />
				<div>{nameProp}</div>
				<div>{emailProp}</div>
			</div>
		</li>
	);
};

export default CandidateItem;
