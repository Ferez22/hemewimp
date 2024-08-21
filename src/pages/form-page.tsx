import React from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';

const FormPage = () => {
  return (
    <>
      <h1>fill this form to generate a prompt</h1>
      <Box sx={{ marginTop: '50px' }}>
        <MyDescription />
        <MyNeeds />
      </Box>
    </>
  );
};

export default FormPage;
