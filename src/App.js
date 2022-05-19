import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
//components
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<ProductListing />} />
				<Route path="/product/:id" element={<ProductDetails />} />
			</Routes>
		</div>
	);
}

export default App;
