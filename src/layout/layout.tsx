import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const myLogo = '< />';
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '15px'
        }}
      >
        {myLogo}
        <Box>Help me with my prompt</Box>
      </Box>

      {children}
    </Box>
  );
};

export default Layout;
