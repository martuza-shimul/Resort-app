import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => (
	<>
		<Hero>
			<Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $199">
				<Link to="/rooms" className="btn-primary">
					our rooms
				</Link>
			</Banner>
		</Hero>
		<Services />
		<FeaturedRooms />
	</>
);

export default Home;
