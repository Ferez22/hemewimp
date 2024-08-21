import React from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';

const FormPage = () => {
  return (
    <Box sx={{ padding: '50px' }}>
      <h1>Fill this form to generate a prompt</h1>
      <Box sx={{ marginTop: '30px' }}>
        <MyDescription />
        <MyNeeds />
      </Box>
    </Box>
  );
};

export default FormPage;
