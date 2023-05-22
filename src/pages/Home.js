import { Component } from "react";
import capsules from "../data/capsules.json";
import CapsuleList from "../components/CapsuleList";

class Home extends Component {
	render() {
		return (<>
			<section>
				<CapsuleList
					title="Full list of capsules"
					capsules={capsules}
					/>
			</section>
		</>);
	}
}

export default Home;
