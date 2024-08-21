import React from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';

const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = React.useState<string>('');
  const [needsInput, setNeedsInput] = React.useState<string>('');

  return (
    <Box sx={{ padding: '50px' }}>
      <h1>Fill this form to generate a prompt</h1>
      <Box sx={{ marginTop: '30px' }}>
        <MyDescription
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
        />
        <MyNeeds needsInput={needsInput} setNeedsInput={setNeedsInput} />
      </Box>
      {needsInput}
    </Box>
  );
};

export default FormPage;
