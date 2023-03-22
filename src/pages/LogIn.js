import { Component } from "react";
import { Navigate } from "react-router-dom";
import { sha512 } from "js-sha512";

class LogIn extends Component {
	state = {
		redirect: false
	}
	render() {
		const login = () => {
			const username = document.login.username.value;
			const password = document.login.password.value;
			let correct = false;
			let exists = true;
			switch (username) {
				case 'uriiisegura':
					correct = sha512(password) === 'ba72b11decfd7068435402c0b2587cac1aab20c080a455b74f827199b9d5a185a6569df9599661a79918e24072890a18da1d7f4b600e708fbad5a998b7f7643b';
					break;
				case 'laia.casas':
					correct = sha512(password) === '85b6693a312013fae54bdea8b1ebd1d347d58a3b9085d34dfca64675f5de748f984ae9fd1b6c787bac330521c0c5c6b8cfc4edfc12c670aec1279beac9942fc1';
					break;
				default:
					exists = false;
			}
			if (correct) {
				document.cookie = 'isLogged=true,secure';
				this.setState({redirect: true});
				this.forceUpdate();
			} else {
				const error = document.getElementById('error');
				if (!exists)
					error.innerHTML = 'The user ' + username + ' is not registed.';
				else
					error.innerHTML = 'Wrong password for user ' + username + '.';
				error.style.display = 'block';
			}
		}

		return (<>
			<section>
				{this.state.redirect && <Navigate to="/" replace />}
				<form className="login-form" name="login">
					<div className="error-msg" id="error"></div>

					<label htmlFor="username">Username:</label>
					<input type="text" name="username" />
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" />
					<button type="button" onClick={login}>Log In</button>
				</form>
			</section>
		</>);
	}
}

export default LogIn;
