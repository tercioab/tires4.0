import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Switch>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Switch>
	</BrowserRouter>,
);
