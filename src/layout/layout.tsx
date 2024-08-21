import React from 'react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="ml-3 mt-2 flex h-full gap-8">
      <div>
        <h1>My App</h1>
        {/* You can add navigation or a logo here */}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
