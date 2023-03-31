import { useEffect, useState } from "react";

import CandidatesItem from "./CandidateItem";

import "./AvailableCandidates.module.scss";

const AvailableCandidates = (props) => {
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		const fetchCandidates = async () => {
			const response = await fetch("http://localhost:3333/api/candidates");

			const responseData = await response.json();

			const loadedCandidates = [];

			for (const key in responseData) {
				loadedCandidates.push({
					id: responseData[key].id,
					name: responseData[key].name,
					email: responseData[key].email,
					avatar: responseData[key].avatar,
				});
			}

			setCandidates(loadedCandidates);
		};

		fetchCandidates();
	}, []);

	const candidateList = candidates.slice(0, 6).map((candidate) => {
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
