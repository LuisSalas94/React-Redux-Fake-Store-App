import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	console.log(products);

	return (
		<div className="row mt-5">
			{products.map((product) => {
				const { title, id, price, image, category } = product;
				return (
					<div className="col mb-4">
						<div
							className="card card-style shadow "
							key={id}
							style={{ minWidth: "200px", maxWidth: "300px" }}
						>
							<img src={image} alt="" />
							<div className="card-body">
								<div className="card-title title">{title}</div>
								<div className="card-title">${price}</div>
								<div className="card-title">{category}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductComponent;
