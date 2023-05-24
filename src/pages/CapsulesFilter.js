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
		let { category, filter } = this.props.params;

		const categories = [
			'system',
			'collection',
			'limited'
		];

		if (!categories.includes(category))
			return <NotFound />;

		let f_capsules;
		if (filter)
			f_capsules = capsules.filter(c => MakeURL(c[category]) === filter);
		else
			f_capsules = capsules.filter(c => c[category] !== false);
		
		return (<>
			<section>
				<CapsuleList
					title={filter ? null : 'Limited Editions'}
					category={category}
					capsules={f_capsules}
					/>
			</section>
		</>);
	}
}

export default withParams(CapsulesFilter);
