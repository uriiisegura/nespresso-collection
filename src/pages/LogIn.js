import { Component } from "react";
import { Navigate } from "react-router-dom";
import { sha512 } from "js-sha512";
import users from "./../data/users.json";

class LogIn extends Component {
	state = {
		redirect: false
	}
	render() {
		const login = () => {
			const username = document.login.username.value;
			const password = document.login.password.value;
			const user = users.filter((n, _) => { return n.username === username })[0];
			const exists = user !== undefined;
			const correct = exists && user.password === sha512(password);
			if (correct) {
				document.cookie = 'isLogged=true,secure';
				this.setState({redirect: true});
				this.forceUpdate();
			} else {
				const error = document.getElementById('error');
				if (!exists)
					error.innerHTML = `The user ${username} is not registed.`;
				else
					error.innerHTML = `Wrong password for ${username}.`;
				error.style.display = 'block';
			}
		}

		return (<>
			<section>
				{this.state.redirect && <Navigate to="/" replace />}
				<form className="login-form" name="login">
					<h1>Log In</h1>
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
