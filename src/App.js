import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Collection from "pages/Collection";
import Layout from "components/Layout";
import Search from "pages/Search";

export default function App() {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/collection/:name", element: <Collection /> },
		{ path: "/search/q=:query", element: <Search />}
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