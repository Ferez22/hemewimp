import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import FormPage from './pages/form-page';
import AboutPage from './pages/about';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
