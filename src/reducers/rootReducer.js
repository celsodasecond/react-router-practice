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
		}
	],
};

const rootReducer = (state = initialState, action) => {
	return state;
};

export default rootReducer;
