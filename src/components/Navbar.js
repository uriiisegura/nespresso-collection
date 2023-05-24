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
						<li onClick={() => this.showHide('submenu1')} className="nav-link">
							<span>Collections<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu1" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Brand Iconic</h4>
									<ul>
										<li><NavLink to="/capsules/collection/ispirazione-italiana">Ispirazione Italiana</NavLink></li>
										<li><NavLink to="/capsules/collection/barista-creations">Barista Creations</NavLink></li>
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
							<span>Systems<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu2" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Systems</h4>
									<ul>
										<li><NavLink to="/capsules/system/original">Original</NavLink></li>
										<li><NavLink to="/capsules/system/vertuo">Vertuo</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-link"><NavLink to="/capsules/limited">Limited Editions</NavLink></li>
						<li className="nav-link nav-btn"><NavLink to="/logout">Log out</NavLink></li>
					</ul></>}
				</div>
			</nav>
		</>);
	}
}

export default Navbar;
