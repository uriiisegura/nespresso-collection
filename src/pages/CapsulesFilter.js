import { Component } from "react";
import { useParams } from "react-router-dom";
import capsules from "../data/capsules.json";
import NotFound from "./NotFound";
import CapsuleList from "../components/CapsuleList";
import MakeURL from "../functions/MakeURL";

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class CapsulesFilter extends Component {
	render() {
		const { filter } = this.props.params;

		const filters = {
			'original': 'system',
			'vertuo': 'system'
		};

		if (!Object.keys(filters).includes(filter))
			return <NotFound />;
		
		return (<>
			<section>
				<CapsuleList
					title={filter + ' capsules'}
					capsules={capsules.filter(c => MakeURL(c[filters[filter]]) === filter)}
					/>
			</section>
		</>);
	}
}

export default withParams(CapsulesFilter);
