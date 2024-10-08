import React, { ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface MyDescriptionProps {
  descriptionInput: string;
  setDescriptionInput: React.Dispatch<React.SetStateAction<string>>;
}

const MyDescription = ({
  descriptionInput,
  setDescriptionInput
}: MyDescriptionProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1
        },
        width: '100%' // Ensure the container takes full width
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          width: '100%' // Ensure the inner container takes full width
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Main goal of the prompt"
          value={descriptionInput} // Controlled value from props
          onChange={handleInputChange} // Update state on change
          helperText="Write something about the main goal. What does the prompt need to achieve?"
          fullWidth // Makes the TextField take full width of its container
        />
      </Box>
    </Box>
  );
};

export default MyDescription;
