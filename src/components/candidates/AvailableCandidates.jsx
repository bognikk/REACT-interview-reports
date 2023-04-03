import CandidatesItem from "./CandidateItem";

import "./AvailableCandidates.module.scss";

const AvailableCandidates = ({ candidatesProp, searchValue }) => {
	const candidateList = candidatesProp
		.slice(0, 6)
		.filter((candidat) =>
			candidat.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		.map((candidate) => {
			return (
				<CandidatesItem
					key={candidate.id}
					idProp={candidate.id}
					nameProp={candidate.name}
					emailProp={candidate.email}
					avatarProp={candidate.avatar}
				/>
			);
		});

	return (
		<>
			<ul>{candidateList}</ul>
		</>
	);
};

export default AvailableCandidates;
