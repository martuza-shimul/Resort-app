import React, { Component } from "react";

const RoomContext = React.createContext(); //declaring context for state management

class RoomProvider extends Component {
	render() {
		return (
			<RoomContext.Provider value="hello">
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
