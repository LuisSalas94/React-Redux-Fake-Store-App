import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	return (
		<div className="row mt-5">
			{products.map((product) => {
				const { title, id, price, image, category } = product;
				return (
					<div className="col mb-4" key={id}>
						<div
							className="card card-style shadow flex-column align-items-center justify-content-between"
							style={{ minWidth: "200px", maxWidth: "300px" }}
						>
							<img src={image} alt="" />
							<div className="card-body d-flex flex-column justify-content-between">
								<div className="card-title title">{title}</div>
								<div className="card-title">${price}</div>
								<div className="card-title">{category}</div>
								<Link to={`/product/${id}`} className="btn btn-outline-info">
									More details
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductComponent;
