// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadPage from "./pages/ReadPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReadPage />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
