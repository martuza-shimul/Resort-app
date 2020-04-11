import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);

		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		};
	}
	static contextType = RoomContext;
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		if (!room) {
			return (
				<div className="error">
					<h3>no such room could be found</h3>
					<Link to="/rooms" className="btn-secondary">
						Back to rooms
					</Link>
				</div>
			);
		}
		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room;
		const [bgImage, ...roomImages] = images;
		// console.log(pets);
		return (
			<>
				<StyledHero img={bgImage || this.state.defaultBcg}>
					<Banner title={`${name} room`}>
						<Link to="/rooms" className="btn-primary">
							Back to rooms
						</Link>
					</Banner>
				</StyledHero>

				<section className="single-room">
					<div className="single-room-images">
						{roomImages.map((image, index) => (
							<img key={index} src={image} alt={name} />
						))}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>Details</h3>
							<p>{description} </p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<h6>Price: ${price} </h6>
							<h6>Size: {size} SQFT</h6>
							<h6>
								Max Capacity:{" "}
								{capacity > 1 ? `${capacity} People` : `${capacity} Person`}{" "}
							</h6>
							<h6>Pets: {pets ? "Allowed" : "Not Allowed"} </h6>
							<h6>{breakfast ? "Free breakfast included" : ""} </h6>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6>extras</h6>
					<ul className="extras">
						{extras.map((item, index) => {
							return <li key={index}> - {item} </li>;
						})}
					</ul>
				</section>
			</>
		);
	}
}
