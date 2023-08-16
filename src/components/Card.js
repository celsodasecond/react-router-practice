import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
	// state = { user: "" };

	// componentDidMount() {
	// 	let user = this.props.match.params.user;
	// 	this.setState({ user }); // ES2015 Allows the use of single variable since the key and value is the same.
	// }

	render() {
		// const { user } = this.state;
		const { title, body } = this.props.card;
		return (
			<div
				className="ui raised very padded text container segment"
				style={{ marginTop: "80px" }}>
				<h3 className="ui header">{title}</h3>
				<p>{body}</p>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let title = ownProps.match.params.user;
	return {
		card: state.cards.find((card) => card.title === title),
	};
};

export default connect(mapStateToProps)(Card);
