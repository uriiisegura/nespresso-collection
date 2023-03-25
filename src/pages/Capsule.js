import React, { Component } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import capsules from "./../data/capsules.json";
import collections from "./../data/collections.json";
import collaborations from "./../data/collaborations.json";
import volumes from "./../data/volumes.json";
import MakeURL from "./../functions/MakeURL";

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Capsule extends Component {
	render() {
		const { id } = this.props.params;
		const capsule = capsules[id];

		if (capsule === undefined)
			return <NotFound />;

		const url = MakeURL(`${capsule.name} ${capsule.system}`);
		const collection = capsule.collection === null ? null : collections.filter(c => c.id === capsule.collection)[0];
		const collaboration = capsule.collaboration === null ? null : collaborations.filter(c => c.id === capsule.collaboration)[0];

		return (<>
			<section className="capsule-hero">
				<img
					className="img capsule-hero-img"
					src={`capsules/perspective/${url}.png`}
					alt={capsule.name}
					/>
				<article className="capsule-info">
					{capsule.collection === null ? <></> : <h4 className="capsule-collection">{capsule.collection}</h4>}
					<h2>{capsule.name}</h2>
					<div className="capsule-about">
						<h5>{capsule.details}</h5>
						<h6><span className="title">Intensity</span>
							{
								[...Array(capsule.intensity)].map((_, i) => {
									return <div className="bar filled" style={{backgroundColor: capsule.color}} key={i}></div>
								})
							}
							<span className="intensity">{capsule.intensity}</span>
							{
								[...Array(14 - capsule.intensity)].map((_, i) => {
									return <div className="bar" style={{backgroundColor: capsule.color}} key={i}></div>
								})
							}
						</h6>
					</div>
					{
						capsule.description.map((p, i) => {
							return <p key={i}>{p}</p>;
						})
					}
				</article>
			</section>
			<section className="capsule-name">
				<h1 className={capsule.decaffeinato ? "decaffeinato" : ""}>{capsule.name}</h1>
				{capsule.limited ?
					<h2  className={capsule.decaffeinato ? "decaffeinato" : ""}>LIMITED EDITION {capsule.limited}</h2>
				: <></>}
			</section>
			<section>
				<div className="details">
					<div className="attributes" style={{backgroundImage: `url("backgrounds/${url}.png")`}}>
						<div className="attributes-wrap">
							{
								capsule.attributes.map(e => {
									return <div className="attribute">
										<h4>{e.name}</h4>
										{e.subtitle ? <h5>{e.subtitle}</h5> : <></>}
										<h6>{"■".repeat(e.value)}{"□".repeat(5 - e.value)}</h6>
									</div>;
								})
							}
						</div>
					</div>
					<div className="capsule-coffee">
						<div className="coffee-origin">
							<article>
								{
									capsule.coffee.map((p, i) => {
										return <p key={i}>{p}</p>;
									})
								}
							</article>
							<img
								className="img origin-img"
								src={`maps/${MakeURL(capsule.origin)}.svg`}
								alt={capsule.origin}
								/>
						</div>
						<div>
							<div className="coffee-beans">
								{
									// TODO: opacity wheel
									capsule.variety.map(e => {
										const backgroundImage = `url("coffee-beans/${MakeURL(e.type)}.png")`;

										return <div className="bean">
											<div className="transparent-bean" style={{backgroundImage: backgroundImage}} />
											<div className="opacity-bean" style={{backgroundImage: backgroundImage}} title={e.type} />
										</div>;
									})
								}
								
							</div>
							{
								capsule.serving.map((p, i) => {
									return <p key={i}>{p}</p>;
								})
							}
							<div className={`cup-sizes ${capsule.sizes.length === 2 ? 'two-columns' : ''}`}>
								{
									capsule.sizes.map(e => {
										const size = volumes.filter(v => v.volume === e)[0];
										return <div className="capsule-size"><svg className="cup-img" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" d={size.svg}></path></svg><div className="size-info"><p>{size.name}</p><p>{size.volume}</p></div></div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*collection !== null ? <>
			<section>
				<h2>{collection.id}</h2>
			</section></>
			: <></>*/}
			{collaboration !== null ? <>
			<section className="capsule-collaboration">
				<div className="collaboration-hero">
					<article className="collaboration-text">
						<h2>{collaboration.collaborator}</h2>
						{
							collaboration.text.map((p, i) => {
								return <p key={i}>{p}</p>;
							})
						}
						<img
							className="img capsule-collaboration-logo"
							src={`collaborations/logos/${MakeURL(collaboration.id)}.svg`}
							alt={`Nespresso × ${collaboration.collaborator}`}
							/>
					</article>
					<div className="capsule-collaboration-img" style={{backgroundImage: `url("collaborations/images/${MakeURL(collaboration.id)}.png")`}}></div>
				</div>
				{
					collaboration.more.map((p, i) => {
						return <p key={i}>{p}</p>;
					})
				}
			</section></>
			: <></>}
		</>);
	}
}

export default withParams(Capsule);
