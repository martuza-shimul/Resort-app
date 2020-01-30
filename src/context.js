import React, { Component } from "react";

const RoomContext = React.createContext(); //declaring context for state management

class RoomProvider extends Component {
	state = {
		greeting: "Hi",
		name: "Shimul"
	};
	render() {
		return (
			<RoomContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
