import { Component } from "react";
import { Link } from "react-router-dom";
import MakeCapsuleName from "../functions/MakeCapsuleName";
import MakeCapsuleLink from "../functions/MakeCapsuleLink";

class CapsuleList extends Component {
	render() {
		return (<>
			<h1 className="list-title">{this.props.title}</h1>
			{
				this.props.capsules.length === 0 ? <>
					<h5 className="info">There are no capsules matching this filter.</h5>
				</>
				:
				<div className="capsule-list">
					{
						this.props.capsules.map((c, i) => {
							const name = MakeCapsuleName(c);
							const link = MakeCapsuleLink(c);
							return <Link to={`/capsule/${link}`} className="capsule" key={i}>
								<div className="capsule-special edition">
									{c.limited ? <div className="limited-edition">limited edition {c.limited}</div> : <></>}
									{c.decaffeinato ? <div className="decaffeinato">decaffeinato</div> : <></>}
								</div>
								<div className="capsule-special sizes">
									{
										c.sizes.map((e, j) => {
											return <div key={j}>{e}</div>
										})
									}
								</div>
								<img src={`capsules/flat/${link}.png`} alt={name} className="img capsule-img" />
								<div className="capsule-caption">
									<h5>{c.name}</h5>
									<h6>{c.details}</h6>
									<div className="intensity-wrap">
										<span className="title">Intensity</span> 
										{
											[...Array(c.intensity)].map((_, i) => {
												return <div className="bar filled" style={{'--capsule-color': c.color}} key={i}></div>
											})
										}
										<span className="intensity">{c.intensity}</span>
										{
											[...Array(14 - c.intensity)].map((_, i) => {
												return <div className="bar" style={{'--capsule-color': c.color}} key={i}></div>
											})
										}
									</div>
								</div>
							</Link>;
						})
					}
				</div>
			}
		</>);
	}
}

export default CapsuleList;
