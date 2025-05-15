import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";
import MyLayout from "./layouts/MyLayout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="account" element={<MyLayout />}>
        <Route index element={<Home />} />
        <Route path="edit" element={<EditPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
