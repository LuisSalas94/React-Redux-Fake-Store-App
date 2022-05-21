import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

//router
import { useParams, Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
//axios
import axios from "axios";
//actions
import { SELECTED_PRODUCT, REMOVE_PRODUCT } from "../redux/actionTypes";

const ProductDetails = () => {
	const product = useSelector((state) => state.product);
	const [loading, setLoading] = useState(false);

	const { id: productID, title, price, description, category, image } = product;

	const { id } = useParams();

	const dispatch = useDispatch();

	const fetchSingleProduct = async (id) => {
		setLoading(true);
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
		dispatch({ type: SELECTED_PRODUCT, payload: response.data });
		setLoading(false);
	};

	useEffect(() => {
		fetchSingleProduct(id);

		return () => {
			dispatch({ type: REMOVE_PRODUCT });
		};
	}, [id]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="container py-4 my-4 mx-auto d-flex flex-column single-detail">
			<div className="header">
				<div className="row r1">
					<div className="col-md-9 abc">
						<h1>{title}</h1>
					</div>
					<p className="text-right para">{category}</p>
					<p className="text-right para">{description}</p>
				</div>
			</div>
			<div className="container-body mt-4">
				<div className="row r3">
					<div className="col-md-5 p-0 klo">
						<ul>
							<li>Price: ${price}</li>
							<li>100% Quality</li>
							<li>Free Shipping</li>
							<li>Easy Returns</li>
							<li>12 Months Warranty</li>
							<li>EMI Starting from (On Credit Cards)</li>
							<li>Normal Delivery : 4-5 Days</li>
							<li>Express Delivery : 2-3 Days</li>
							<li>
								<Link className="btn btn-outline-info link-style" to="/">
									BACK
								</Link>
								<button type="button" className="btn btn-outline-info">
									BUY NOW
								</button>
							</li>
						</ul>
					</div>
					<div className="col-md-7">
						<img src={image} width="60%" height="65%" alt={productID} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
