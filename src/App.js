import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import LogOut from "./components/LogOut";
import Palette from "./pages/Palette";
import "./css/normalize.css";
import "./css/main.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";

function App() {
	return (<>
		<Router>
			<ScrollToTop />
			<Routes>
				<Route exact path="/login" element={<Navbar show={false} />} />
				<Route path="*" element={<Navbar show={true} />} />
			</Routes>
			<main className="page">
				<Routes>
					<Route path="/" element={<RequireAuth e={<Home />} />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/logout" element={<LogOut />} />
					<Route path="/palette" element={<Palette />} />
				</Routes>
			</main>
		</Router>

		<Footer />
	</>);
}

export default App;
