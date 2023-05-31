import { Component } from "react";
import collections from "./../data/collections.json";
import CapsuleCard from "./CapsuleCard";

class CapsuleList extends Component {
	render() {
		return (<>
			<h1 className="list-title">
				{
					this.props.title ? this.props.title
					: (this.props.capsules.length === 0
					? 'List of capsules'
					: this.props.capsules[0][this.props.category] + ' capsules')
				}
			</h1>
			{
				this.props.capsules.length === 0 ? <>
					<h5 className="info">There are no capsules matching this filter.</h5>
				</>
				:
				<div className="capsule-list">
					{
						this.props.capsules.map((c, i) => {
							return <CapsuleCard
										key={i}
										capsule={c}
										collection={c.collection ? collections.filter(e => e.id === c.collection)[0] : null} />;
						})
					}
				</div>
			}
		</>);
	}
}

export default CapsuleList;
