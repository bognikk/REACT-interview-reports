import { useState } from "react";
import Modal from "../UI/Modal";

import classes from "./ReportsTable.module.scss";

const ReportsTable = ({ reportProp }) => {
	const [modalIsShown, setModalIsShown] = useState(false);
	const [foundReport, setFoundReport] = useState({});

	const showModalHandler = (id) => {
		setModalIsShown(true);

		setFoundReport(reportProp.find((report) => report.id === id));
	};

	const hideModalHandler = () => {
		setModalIsShown(false);
	};

	const tableBody = reportProp.map((report) => {
		const fullDate = new Date(report.interviewDate);
		const month = fullDate.getUTCMonth();
		const day = fullDate.getUTCDate();
		const year = fullDate.getUTCFullYear();
		const date = `${day}.${month}.${year}`;

		return (
			<tbody key={report.id}>
				<tr>
					<td>{report.companyName}</td>
					<td>{date}</td>
					<td>{report.status}</td>
					<td>
						<button
							onClick={() => showModalHandler(report.id)}
							className={classes.viewBtn}
						></button>
					</td>
				</tr>
			</tbody>
		);
	});

	return (
		<>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Company</th>
						<th scope="col">Interview Date</th>
						<th scope="col" colSpan="2">
							Status
						</th>
					</tr>
				</thead>
				{tableBody}
			</table>
			{modalIsShown && (
				<Modal reportProp={foundReport} onClose={hideModalHandler} />
			)}
		</>
	);
};

export default ReportsTable;
