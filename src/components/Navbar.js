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
						<li className="nav-link"><NavLink to="/capsules/original">Original</NavLink></li>
						<li className="nav-link"><NavLink to="/capsules/vertuo">Vertuo</NavLink></li>
						{/*<li onClick={() => this.showHide('submenu1')} className="nav-link">
							<span>Lorem ipsum<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu1" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Lorem ipsum</h4>
									<ul>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Lorem ipsum</h4>
									<ul>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Lorem ipsum</h4>
									<ul>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
									</ul>
								</div>
								<div className="sub-menu">
									<h4 className="sub-menu-title">Lorem ipsum</h4>
									<ul>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li onClick={() => this.showHide('submenu2')} className="nav-link">
							<span>Lorem ipsum<img src="font-awesome/caret-down.svg" alt="" /></span>
							<div id="submenu2" className="sub-menus">
								<div className="sub-menu">
									<h4 className="sub-menu-title">Lorem ipsum</h4>
									<ul>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
										<li><NavLink to="/">Lorem ipsum</NavLink></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-link"><NavLink to="/">Lorem ipsum</NavLink></li>
						<li className="nav-link"><NavLink to="/">Lorem ipsum</NavLink></li>*/}
						<li className="nav-link nav-btn"><NavLink to="/logout">Log out</NavLink></li>
					</ul></>}
				</div>
			</nav>
		</>);
	}
}

export default Navbar;
