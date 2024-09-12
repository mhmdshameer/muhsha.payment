import { Route, Routes } from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;