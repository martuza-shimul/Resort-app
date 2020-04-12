import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	// get Unique types
	var types = getUnique(rooms, "type");
	types = ["all", ...types];
	// map to JSX
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}{" "}
			</option>
		);
	});
	var people = getUnique(rooms, "capacity");
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}{" "}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* select type	 */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/* end select type */}
				{/* Guest 	 */}
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/* end Guest  */}

				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price} </label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* room price end */}

				{/* size */}

				<div className="form-group">
					<label htmlFor="size">room size SQFT</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							className="size-input"
							value={minSize}
							onChange={handleChange}
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							className="size-input"
							value={maxSize}
							onChange={handleChange}
						/>
					</div>
				</div>
				{/* end of size */}

				{/* extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							id="breakfast"
							name="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input
							type="checkbox"
							id="pets"
							name="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
			</form>
		</section>
	);
};

export default RoomFilter;
