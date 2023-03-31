import classes from "./CandidatesFilter.module.scss";

const CandidateFilter = (props) => {
	return (
		<section className={classes.filter}>
			<h2>Candidates</h2>
			<input type="text" placeholder="Search..." />
		</section>
	);
};

export default CandidateFilter;
