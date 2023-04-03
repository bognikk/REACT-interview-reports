import { useParams } from "react-router-dom";
import { useEffect, useState, React } from "react";

import ReportsTable from "./ReportsTable";

const Reports = () => {
	const { candId } = useParams();
	const [candidate, setCandidate] = useState([]);
	const [report, setReport] = useState([]);

	useEffect(() => {
		const fetchCandidate = async () => {
			const response = await fetch(
				`http://localhost:3333/api/candidates/${candId}`
			);

			const responseData = await response.json();

			const candidate = {
				id: responseData.id,
				name: responseData.name,
				email: responseData.email.toLowerCase(),
				avatar: responseData.avatar,
				dob: responseData.birthday,
				education: responseData.education,
			};
			setCandidate(candidate);
		};

		const fetchReport = async () => {
			const response = await fetch(`http://localhost:3333/api/reports/`);

			const responseData = await response.json();

			const loadedReport = [];

			for (const key in responseData) {
				if (responseData[key].candidateId === parseInt(candId)) {
					loadedReport.push(responseData[key]);
				}
			}

			setReport(loadedReport);
		};

		fetchReport();
		fetchCandidate();
	}, [candId]);

	return (
		<div className="candidatesReport">
			<img src={candidate.avatar} alt="Place for avatar" width={300}></img>
			<div>
				<p>Name:</p>
				<p>{candidate.name}</p>
				<p>Email:</p>
				<p>{candidate.email}</p>
			</div>
			<div>
				<p>Date of birth:</p>
				<p>{candidate.dob}</p>
				<p>Education: </p>
				<p>{candidate.education}</p>
			</div>
			<div>
				<h1>Reports</h1>
				<h2>{report.name}</h2>
				<ReportsTable reportProp={report} />
			</div>
		</div>
	);
};
export default Reports;
