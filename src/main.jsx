import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { client } from "./config/client.js";
import { QueryClientProvider } from "@tanstack/react-query";
// import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
);
