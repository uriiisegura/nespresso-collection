import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
	showHide(id) {
		const submenu = document.getElementById(id);
		if (submenu !== null)
			submenu.classList.toggle('active');
	}
	expandMobile() {
		const nav = document.getElementById('nav-links');
		nav.classList.toggle('show');
	}
	render() {
		return (<>
			<nav id="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<NavLink to="/" className="nav-logo">
							<img src="logo.svg" alt="Nespresso" />
						</NavLink>
					</div>
					{this.props.show && <><div className="nav-expand">
						<button onClick={this.expandMobile} title="expand">
							<img src="font-awesome/align-justify.svg" alt="" />
						</button>
					</div>
					<ul id="nav-links">
						<li className="nav-link"><NavLink to="/all-capsules">All Capsules</NavLink></li>
						<li onClick={() => this.showHide('submenu1')} className="nav-link">
							<span>Collections<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu1" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Brand Iconic</h4>
									<ul>
										<li><NavLink to="/capsules/collection/ispirazione-italiana">Ispirazione Italiana</NavLink></li>
										<li><NavLink to="/capsules/collection/barista-creations">Barista Creations</NavLink></li>
										<li><NavLink to="/capsules/collection/master-origin">Master Origin</NavLink></li>
										<li><NavLink to="/capsules/collection/world-explorations">World Explorations</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Festive</h4>
									<ul>
										<li><NavLink to="/capsules/collection/variations-nordic">2019 - Variations Nordic</NavLink></li>
										<li><NavLink to="/capsules/collection/festive---johanna-ortiz">2021 - Johanna Ortiz</NavLink></li>
										<li><NavLink to="/capsules/collection/festive---pierre-herme">2022 - Pierre Hermé</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li onClick={() => this.showHide('submenu2')} className="nav-link">
							<span>Properties<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu2" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Systems</h4>
									<ul>
										<li><NavLink to="/capsules/system/original">Original</NavLink></li>
										<li><NavLink to="/capsules/system/vertuo">Vertuo</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Sizes</h4>
									<ul>
										<li><NavLink to="/capsules/sizes/25-ml">Ristretto (25 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/40-ml">Espresso (40 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/80-ml">Double Espresso (80 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/110-ml">Lungo (110 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/150-ml">Gran Lungo (150 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/230-ml">Mug (230 mL)</NavLink></li>
										<li><NavLink to="/capsules/sizes/535-ml">Carafe (535 mL)</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Intensity</h4>
									<ul>
										{/* blank */}<li><NavLink to="/capsules/intensity/1">Intensity 1</NavLink></li>
										<li><NavLink to="/capsules/intensity/2">Intensity 2</NavLink></li>
										{/* blank */}<li><NavLink to="/capsules/intensity/3">Intensity 3</NavLink></li>
										<li><NavLink to="/capsules/intensity/4">Intensity 4</NavLink></li>
										<li><NavLink to="/capsules/intensity/5">Intensity 5</NavLink></li>
										<li><NavLink to="/capsules/intensity/6">Intensity 6</NavLink></li>
										<li><NavLink to="/capsules/intensity/7">Intensity 7</NavLink></li>
										<li><NavLink to="/capsules/intensity/8">Intensity 8</NavLink></li>
										<li><NavLink to="/capsules/intensity/9">Intensity 9</NavLink></li>
										<li><NavLink to="/capsules/intensity/10">Intensity 10</NavLink></li>
										<li><NavLink to="/capsules/intensity/11">Intensity 11</NavLink></li>
										<li><NavLink to="/capsules/intensity/12">Intensity 12</NavLink></li>
										<li><NavLink to="/capsules/intensity/13">Intensity 13</NavLink></li>
										{/* blank */}<li><NavLink to="/capsules/intensity/14">Intensity 14</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li onClick={() => this.showHide('submenu3')} className="nav-link">
							<span>Limited Editions<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu3" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Limited Editions</h4>
									<ul>
										<li><NavLink to="/capsules/limited">All</NavLink></li>
										<li><NavLink to="/capsules/limited/2019">2019</NavLink></li>
										<li><NavLink to="/capsules/limited/2020">2020</NavLink></li>
										<li><NavLink to="/capsules/limited/2021">2021</NavLink></li>
										<li><NavLink to="/capsules/limited/2022">2022</NavLink></li>
										<li><NavLink to="/capsules/limited/2023">2023</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-link"><NavLink to="/capsules/decaffeinato">Decaffeinato</NavLink></li>
						<li className="nav-link nav-btn"><NavLink to="/logout">Log out</NavLink></li>
					</ul></>}
				</div>
			</nav>
		</>);
	}
}

export default Navbar;
