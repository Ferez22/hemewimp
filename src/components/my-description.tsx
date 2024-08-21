import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyDescription = () => {
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
      <div className="">
        <TextField
          required
          id="outlined-required"
          label="My goal?"
          defaultValue="write here .."
          helperText="Write something about the your goal, do you want to write an email? to whom? what is the subject?"
        />
      </div>
    </Box>
  );
};

export default MyDescription;
