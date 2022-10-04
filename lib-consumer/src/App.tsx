import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App as LibApp } from '@Monoametsi/app-library';
import './assets/global.css';
import { Button } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/page-3" />} />
        <Route path="/onboarding/*" element={<LibApp />} />
        <Route path="/page-3" element={<Button link={"/onboarding"} btnText="Go back to library" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;