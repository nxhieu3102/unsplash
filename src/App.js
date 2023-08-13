import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import LazyComponent from "components/LazyComponent";
import React from 'react';

const Home = LazyComponent(React.lazy(() => import("pages/Home")));
const Search = LazyComponent(React.lazy(() => import("pages/Search")));
const Topic = LazyComponent(React.lazy(() => import("pages/Topic")));

export default function App() {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/topic/:name", element: <Topic /> },
		{ path: "/search/:query", element: <Search /> }
	];

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={<Layout>{route.element}</Layout>}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}