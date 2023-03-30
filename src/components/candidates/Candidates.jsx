import React from "react";
import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";

const Candidates = (props) => {
	return (
		<>
			<h2>CANDIDATES</h2>
			<CandidatesFilter />
			<AvailableCandidates />
		</>
	);
};

export default Candidates;
