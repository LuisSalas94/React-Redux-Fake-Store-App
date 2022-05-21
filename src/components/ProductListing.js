import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
//axios
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { SET_PRODUCTS } from "../redux/actionTypes";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const fetchProducts = async () => {
		setLoading(true);
		const response = await axios.get("https://fakestoreapi.com/products");
		dispatch({ type: SET_PRODUCTS, payload: response.data });
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container">
			{loading ? <Spinner /> : <ProductComponent />}
		</div>
	);
};

export default ProductListing;
