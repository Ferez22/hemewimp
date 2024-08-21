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
        }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="My goal?"
          value={descriptionInput} // Controlled value from props
          onChange={handleInputChange} // Update state on change
          helperText="Write something about the your goal, do you want to write an email? to whom? what is the subject?"
        />
      </div>
    </Box>
  );
};

export default MyDescription;
