import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render() {
		const { featuredRooms: rooms } = this.context;
		console.log(rooms);

		return <div>Hello from FeaturedRooms </div>;
	}
}

export default FeaturedRooms;
