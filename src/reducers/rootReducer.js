const initialState = {
	cards: [
		{
			id: 1,
			title: "Alex",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nihil. Consequuntur praesentium reiciendis iure soluta porro consequatur illum fugit, vitae consectetur eveniet est numquam adipisci quibusdam quaerat deleniti laborum expedita?",
		},
		{
			id: 2,
			title: "Willma",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nihil. Consequuntur praesentium reiciendis iure soluta porro consequatur illum fugit, vitae consectetur eveniet est numquam adipisci quibusdam quaerat deleniti laborum expedita?",
		},
		{
			id: 3,
			title: "John",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nihil. Consequuntur praesentium reiciendis iure soluta porro consequatur illum fugit, vitae consectetur eveniet est numquam adipisci quibusdam quaerat deleniti laborum expedita?",
		},
	],
	users: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DELETE_CARD":
			let newCard = state.cards.filter((card) => {
				return action.id !== card.id;
			});
			return {
				...state,
				cards: newCard,
			};
		case "FETCH_USERS":
			return {
				...state,
				users: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;
