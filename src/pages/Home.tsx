import { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import ListUsers from "../components/listUsers/ListUsers";

class Home extends Component<WithTranslation> {

	render() {

		const { t } = this.props;

		return (
			<div className="home">
				<div className="container">
					<h1>{t('welcome')}</h1>
					<ListUsers />
				</div>
			</div>
		);
	}
}

export default withTranslation()(Home);