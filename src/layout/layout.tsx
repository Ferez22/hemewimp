import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      className="ml-3 mt-2 flex flex-col gap-4 md:flex-row md:gap-8"
      sx={{
        // MUI responsive styles
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          gap: 4
        }
      }}
    >
      <Box
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          // Responsive text size
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        <h1>hemewimp</h1>
      </Box>
      <Box
        sx={{
          // Adjust padding based on screen size
          padding: { xs: 0, md: 2 },
          // Allow content to grow and shrink as needed
          flex: 1
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
