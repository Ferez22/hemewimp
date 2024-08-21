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
          xs: '12px', // 8px padding on extra-small screens
          md: '32px' // 32px padding on medium screens
        }
      }}
    >
      <h1 className="text-xl">Fill this form and generate a prompt</h1>
      <Box sx={{ marginTop: '30px' }}>
        <MyDescription
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
        />
        <MyNeeds needsInputs={needsInputs} setNeedsInputs={setNeedsInputs} />
      </Box>
      <Button
        variant="contained"
        sx={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        Generate a prompt
      </Button>
    </Box>
  );
};

export default FormPage;
