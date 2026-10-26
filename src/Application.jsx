import * as React from "react";
import * as ReactRouter from "react-router-dom";
import * as ReactDOM from "react-dom/client";

import HomePage from "./pages/HomePage.jsx";

import "./assets/Styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ReactRouter.BrowserRouter>
            <ReactRouter.Routes>
                <ReactRouter.Route path="/" element={<HomePage/>}/>
            </ReactRouter.Routes>
        </ReactRouter.BrowserRouter>
    </React.StrictMode>
);