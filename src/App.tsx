import React from 'react';
import Layout from './layout/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Your existing app content goes here */}
        <h2>Welcome to My App</h2>
        <p>This is the main content of the app.</p>
      </div>
    </Layout>
  );
};

export default App;
