import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const myLogo = '/>';
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textTransform: 'uppercase',
            fontWeight: 'bold',

            padding: '15px'
          }}
        >
          {myLogo}
          <span className="text-xs">Help me with my prompt</span>
        </Box>
        <Box
          sx={{
            marginRight: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Link to="/">
            <IconButton aria-label="Example">
              <HomeOutlinedIcon />
            </IconButton>
          </Link>
          <Box
            sx={{
              textDecoration: 'none',
              color: 'inherit', // Inherit color from parent, or set a default color
              padding: 1,
              borderRadius: 1,
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                color: '#fff', // Change text color on hover
                backgroundColor: '#000', // Optional: change background color on hover
                padding: 1,
                borderRadius: 1
              }
            }}
          >
            <Link to="/about">About</Link>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
