import { Component } from "react";
import { Link } from "react-router-dom";
import MakeCapsuleName from "../functions/MakeCapsuleName";
import MakeCapsuleLink from "../functions/MakeCapsuleLink";

class CapsuleCard extends Component {
	render() {
		const name = MakeCapsuleName(this.props.capsule);
		const link = MakeCapsuleLink(this.props.capsule);

		return (<Link to={`/capsule/${link}`} className="capsule">
			<div className="capsule-special edition">
				{
					this.props.capsule.limited
					?
						Array.isArray(this.props.capsule.limited)
						? <div className="limited-edition">limited edition {this.props.capsule.limited.join(' / ')}</div>
						: <div className="limited-edition">limited edition {this.props.capsule.limited}</div>
					: <></>
				}
				{this.props.capsule.decaffeinato ? <div className="decaffeinato">decaffeinato</div> : <></>}
			</div>
			<div className="capsule-special sizes">
				{
					this.props.capsule.sizes.map((e, i) => {
						return <div key={i}>{e}</div>
					})
				}
			</div>
			<img src={`capsules/flat/${link}.png`} alt={name} className="img capsule-img" />
			<div className="capsule-caption">
				<h5>{this.props.collection ? ((this.props.collection.id.includes('Festive') ? this.props.collection.id.split(' - ')[0] : this.props.collection.id) + ' ') : <></>}{this.props.capsule.name}</h5>
				<h6>{this.props.capsule.details}</h6>
				{
					this.props.capsule.intensity ? <div className="intensity-wrap">
						<span className="title">Intensity</span> 
						{
							[...Array(this.props.capsule.intensity)].map((_, i) => {
								return <div className="bar filled" style={{'--capsule-color': this.props.capsule.color}} key={i}></div>
							})
						}
						<span className="intensity">{this.props.capsule.intensity}</span>
						{
							[...Array(14 - this.props.capsule.intensity)].map((_, i) => {
								return <div className="bar" style={{'--capsule-color': this.props.capsule.color}} key={i}></div>
							})
						}
					</div>
					: <></>
				}
			</div>
		</Link>);
	}
}

export default CapsuleCard;
