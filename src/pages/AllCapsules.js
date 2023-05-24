import { Component } from "react";
import capsules from "../data/capsules.json";
import CapsuleList from "../components/CapsuleList";

class Home extends Component {
	render() {
		return (<>
			<section>
				<CapsuleList
					title="All capsules"
					capsules={capsules}
					/>
			</section>
		</>);
	}
}

export default Home;
