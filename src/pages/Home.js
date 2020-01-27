import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => (
	<>
		<Hero>
			<Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $199">
				<Link to="/rooms" className="btn-primary">
					our rooms
				</Link>
			</Banner>
		</Hero>
	</>
);

export default Home;
