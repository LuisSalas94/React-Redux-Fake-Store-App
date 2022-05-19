import React, { useEffect } from "react";
//axios
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { SET_PRODUCTS } from "../redux/actionTypes";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios.get("https://fakestoreapi.com/products");
		dispatch({ type: SET_PRODUCTS, payload: response.data });
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container">
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
