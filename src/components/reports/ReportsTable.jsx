const ReportsTable = ({ reportProp }) => {
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
						<button>View</button>
						{/* ideja je da na ovo dugme otvorimo modal sa informacijama, jebemliga */}
					</td>
				</tr>
			</tbody>
		);
	});
	return (
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
	);
};

export default ReportsTable;
