import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

const RoomContainer = ({ context }) => {
	const { loading, sortedRooms, rooms } = context;

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</div>
	);
};

export default withRoomConsumer(RoomContainer);
