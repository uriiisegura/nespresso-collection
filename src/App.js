import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import LogOut from "./components/LogOut";
import Palette from "./pages/Palette";
import NotFound from "./pages/NotFound";
import "./css/normalize.css";
import "./css/main.css";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import CapsulesFilter from "./pages/CapsulesFilter";
import Capsule from "./pages/Capsule";
import Footer from "./components/Footer";

function App() {
	return (<>
		<Router>
			<ScrollToTop />
			<Routes>
				<Route exact path="/login" element={<Navbar show={false} />} />
				<Route exact path="/palette" element={<Navbar show={false} />} />
				<Route path="*" element={<Navbar show={true} />} />
			</Routes>
			<main className="page">
				<Routes>
					<Route path="/" element={<RequireAuth e={<Home />} />} />
					<Route path="/capsules/:category" element={<RequireAuth e={<CapsulesFilter />} />} />
					<Route path="/capsules/:category/:filter" element={<RequireAuth e={<CapsulesFilter />} />} />
					<Route path="/capsule/:id" element={<RequireAuth e={<Capsule />} />} />


					<Route path="/login" element={<LogIn />} />
					<Route path="/logout" element={<LogOut />} />
					
					<Route path="/palette" element={<Palette />} />

					<Route path="*" element={<RequireAuth e={<NotFound />} />} />
				</Routes>
			</main>
		</Router>

		<Footer />
	</>);
}

export default App;
