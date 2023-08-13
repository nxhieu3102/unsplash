import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Topic from "pages/Topic";
import Layout from "components/Layout";
import Search from "pages/Search";

export default function App() {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/topic/:name", element: <Topic /> },
		{ path: "/search/:query", element: <Search />}
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