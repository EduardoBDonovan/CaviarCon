// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// // // Handle GitHub Pages redirect for client-side routing
// // if (window.location.search.includes("redirect=")) {
// //   const redirectPath = window.location.search.replace("?redirect=", "");
// //   window.history.replaceState(null, "", redirectPath);
// // }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Ensure this is installed
import App from "./App.jsx";
import "./index.css";

// Handle GitHub Pages redirect for client-side routing
if (window.location.search.includes("redirect=")) {
  const redirectPath = window.location.search.replace("?redirect=", "");
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
