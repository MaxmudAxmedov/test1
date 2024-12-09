import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import SinglePage from "../components/SinglePage";
import Layout from "../Layout/Layout";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="single/:id" element={<SinglePage />} />
            </Route>
        </Routes>
    );
}
