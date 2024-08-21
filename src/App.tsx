import React from 'react';
import Layout from './layout/layout';
import FormPage from './pages/form-page';

const App: React.FC = () => {
  return (
    <Layout>
      <FormPage />
    </Layout>
  );
};

export default App;
