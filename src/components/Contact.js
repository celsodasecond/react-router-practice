import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = ({ cards }) => {
	// setTimeout( () => {
	//     props.history.push('/about')
	// }, 2000) // Makes the Contact Page go to the About page after 2 seconds.
	return (
		<div>
			{/* <Modal /> */}
			{cards.map((card) => {
				return (
					<div
						className="ui raised very padded text container segment"
						style={{ marginTop: "80px" }}
						key={card.id}>
						<Link to={`/${card.title}`} className="ui header">
							{card.title}
						</Link>
						<p>{card.body}</p>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
	};
};

export default connect(mapStateToProps)(Contact);
