import { Component } from "react";
import { Navigate } from "react-router-dom";

class LogOut extends Component {
	render() {
		const cookies = document.cookie.split(";");
	
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i];
			const eqPos = cookie.indexOf("=");
			const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
		
		return <Navigate to="/login" replace />;
	}
}

export default LogOut;
