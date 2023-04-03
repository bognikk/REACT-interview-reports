import { useEffect, useState, React } from "react";

import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";

import classes from "./Candidates.module.scss";

const Candidates = (props) => {
	const [candidates, setCandidates] = useState([]);
	// const [filteredCandidates, setfilteredCandidates] = useState([]);

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

	const filterCandidates = (value) => {
		const filteringList = [...candidates];
		let filtered = filteringList.filter(
			(cand) => {
				return cand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
			}
			// cand.name.toLowerCase().includes(value.toLowerCase())
		);

		if (value.trim() === "") {
			setCandidates(filteringList);
		} else {
			setCandidates(filtered);
		}

		// if (value.trim() === "") {
		// 	setfilteredCandidates(candidates);
		// } else {
		// 	setfilteredCandidates(filtered);
		// }
	};

	return (
		<section className={classes.candidates}>
			<CandidatesFilter onFilter={filterCandidates} />
			<AvailableCandidates candidatesProp={candidates.slice(0, 6)} />
		</section>
	);
};

export default Candidates;
