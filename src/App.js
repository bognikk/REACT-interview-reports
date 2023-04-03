import { Route, Routes } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Candidates from "./components/candidates/Candidates";
import Reports from "./components/reports/Reports";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Candidates />}></Route>
				<Route path="/reports/:candId" element={<Reports />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
