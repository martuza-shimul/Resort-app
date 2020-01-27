import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => (
	<Hero>
		<Banner title="404" subtitle="Maybe you lost">
			<Link to="/" className="btn-primary">
				Back to home
			</Link>
		</Banner>
	</Hero>
);

export default Error;
