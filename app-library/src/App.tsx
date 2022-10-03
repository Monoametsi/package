import React from 'react';
import "./assets/global.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Page1 } from './pages/page1/page-1';
import { Page2 } from './pages/page2/page-2';

const App: React.FunctionComponent<any> = () => {
  return (
    //<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/page-1" />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
