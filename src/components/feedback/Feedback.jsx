import React, { Component } from "react";
import { connect } from "react-redux";

class Feedback extends Component {
	render() {
		const { reviews } = this.props;
		return (
			<div>
				{reviews.map((item: any, index: number) => (
					<div key={index}>
						<b>{item.name}</b>: {item.text} ({item.date})
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	reviews: state.reviews,
});

export default connect(mapStateToProps)(Feedback);
