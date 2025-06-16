import { Component } from "react";

import ListUsers from "../components/listUsers/ListUsers";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="container">
					<ListUsers />
				</div>
			</div>
		);
	}
}

export default Home;