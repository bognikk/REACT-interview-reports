import { useEffect, useState, React } from "react";

import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";

import classes from "./Candidates.module.scss";

const Candidates = (props) => {
	const [candidates, setCandidates] = useState([]);
	const [searchValue, setSearchValue] = useState("");

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

	const filterValue = (value) => {
		setSearchValue(value);
	};

	// const filterCandidates = (value) => {
	// 	const filtered = candidates.filter((cand) =>
	// 		cand.name.toLowerCase().includes(value.toLowerCase())
	// 	);

	// 	if (!value.trim()) {
	// 		setfilteredCandidates(candidates);
	// 	} else {
	// 		setfilteredCandidates(filtered);
	// 	}
	// };

	return (
		<section className={classes.candidates}>
			<CandidatesFilter onFilter={filterValue} />
			<AvailableCandidates
				candidatesProp={candidates}
				searchValue={searchValue}
			/>
		</section>
	);
};

export default Candidates;
