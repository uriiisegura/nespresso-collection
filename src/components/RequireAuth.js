import { Component } from "react";
import { Navigate } from "react-router-dom";

class RequireAuth extends Component {
	getCookie(name) {
		const cookies = document.cookie.split(';');
		for (let cookie of cookies) {
			cookie = cookie.split(',')[0];
			const [k, v] = cookie.split('=');
			if (k.trim() === name) return v;
		}
		return null;
	}
	render() {
		if (this.getCookie('isLogged') !== 'true')
			return <Navigate to="/login" replace />;
		else
			return this.props.e;
	}
}

export default RequireAuth;
