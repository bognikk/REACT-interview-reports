import React from "react";
import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";

import classes from "./Candidates.module.scss";

const Candidates = (props) => {
	return (
		<section className={classes.candidates}>
			<CandidatesFilter />
			<AvailableCandidates />
		</section>
	);
};

export default Candidates;
