import { Component } from "react";
import { useParams } from "react-router-dom";
import capsules from "../data/capsules.json";
import NotFound from "./NotFound";
import volumes from "../data/volumes.json";
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
			'limited',
			'sizes'
		];

		if (!categories.includes(category))
			return <NotFound />;

		let f_capsules;
		if (filter)
			f_capsules = capsules.filter(c => {
				if (Array.isArray(c[category]))
					return MakeURL(c[category]).includes(filter);
				return MakeURL(c[category]) === filter;
			});
		else
			f_capsules = capsules.filter(c => c[category] !== false);
		
		let title = null;
		if (category === 'sizes')
			title = volumes.filter(v => MakeURL(v.volume) === filter)[0].name + ' capsules';
		
		return (<>
			<section>
				<CapsuleList
					title={filter ? title : 'Limited Editions'}
					category={category}
					capsules={f_capsules}
					/>
			</section>
		</>);
	}
}

export default withParams(CapsulesFilter);
