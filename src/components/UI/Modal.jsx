import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
	return <div className={classes.backdrop} onClick={onClose} />;
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, reportProp }) => {
	const fullDate = new Date(reportProp.interviewDate);
	const month = fullDate.getUTCMonth();
	const day = fullDate.getUTCDate();
	const year = fullDate.getUTCFullYear();
	const date = `${day}.${month}.${year}`;

	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
			{ReactDOM.createPortal(
				<div className={classes.modal}>
					<div className={classes.content}>
						<header>
							<p>{reportProp.candidateName}</p>
							<button onClick={onClose}>close</button>
						</header>
						<p>{reportProp.companyName}</p>
						<p>{date}</p>
						<p>{reportProp.phase}</p>
						<p>{reportProp.status}</p>
						<p>{reportProp.note}</p>
					</div>
				</div>,
				portalElement
			)}
		</>
	);
};

export default Modal;
