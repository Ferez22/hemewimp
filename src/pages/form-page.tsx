import React, { useState } from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const [needsInputs, setNeedsInputs] = useState<string[]>(['']); // State for needs inputs

  // Function to handle form submission
  const handleSubmit = () => {
    console.log('Description:', descriptionInput);
    console.log('Needs:', needsInputs);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '8px', // 8px padding on extra-small screens
          sm: '16px', // 16px padding on small screens
          md: '32px', // 32px padding on medium screens
          lg: '40px', // 40px padding on large screens
          xl: '50px' // 50px padding on extra-large screens
        }
      }}
    >
      <h1>Fill this form to generate a prompt</h1>
      <Box sx={{ marginTop: '30px' }}>
        <MyDescription
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
        />
        <MyNeeds needsInputs={needsInputs} setNeedsInputs={setNeedsInputs} />
      </Box>
      <Button
        variant="contained"
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormPage;
