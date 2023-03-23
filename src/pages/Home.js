import { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
	render() {
		return (<>
			<section>
				<h1>Home</h1>
				<NavLink to="/capsule/0">Ispirazione Italiana Milano Intenso</NavLink>
			</section>
		</>);
	}
}

export default Home;
