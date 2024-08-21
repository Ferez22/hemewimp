import React from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = React.useState<string>('');
  const [needsInput, setNeedsInput] = React.useState<string>('');

  return (
    <Box
      sx={{
        padding: {
          xs: '8px', // 16px padding on extra-small screens
          sm: '16px', // 24px padding on small screens
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
        <MyNeeds needsInput={needsInput} setNeedsInput={setNeedsInput} />
      </Box>
      <Button
        variant="contained"
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        Contained
      </Button>
    </Box>
  );
};

export default FormPage;
