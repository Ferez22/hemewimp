import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const MyNeeds = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '50ch'
        }
      }}
      noValidate
      autoComplete="off"
    >
      <div className="mt-3 flex items-center justify-center">
        <TextField
          id="outlined-required"
          label="My needs"
          defaultValue="write here .."
          helperText="Write something about the your needs, does the email have to be friendly? formal? what are the key points?"
        />
        <Tooltip title="Add a need" placement="top">
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default MyNeeds;
