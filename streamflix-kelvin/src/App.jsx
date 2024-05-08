import React from "react";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster closeButton richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Id/:Title" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
