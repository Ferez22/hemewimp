import React, { ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface MyNeedsProps {
  needsInputs: string[];
  setNeedsInputs: React.Dispatch<React.SetStateAction<string[]>>;
}

const MyNeeds = ({ needsInputs, setNeedsInputs }: MyNeedsProps) => {
  // Function to add a new input field
  const addInputField = () => {
    setNeedsInputs([...needsInputs, '']);
  };

  // Function to handle changes in any of the input fields
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newInputs = [...needsInputs];
    newInputs[index] = event.target.value;
    setNeedsInputs(newInputs);
  };

  // Function to delete an input field
  const deleteInputField = (index: number) => {
    if (needsInputs.length > 1) {
      setNeedsInputs(needsInputs.filter((_, i) => i !== index));
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1
        },
        position: 'relative'
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        {needsInputs.map((input, index) => (
          <div className="relative flex items-start" key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1
              }}
            >
              {/* Show delete button only next to the input field on larger screens */}
              {index !== 0 && (
                <Box sx={{ marginTop: '15px' }}>
                  <Tooltip title="Delete a need" placement="top">
                    <IconButton
                      onClick={() => deleteInputField(index)}
                      className="ml-2 hidden lg:block"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
            {/* Show the add button only next to the last input field on larger screens */}
            {index === needsInputs.length - 1 && (
              <Box sx={{ marginTop: '15px' }}>
                <Tooltip title="Add a need" placement="top">
                  <IconButton
                    onClick={addInputField}
                    className="ml-2 hidden lg:block"
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            <TextField
              value={input} // Use local input value
              onChange={e => handleInputChange(index, e)}
              label={`My need ${index + 1} ... `}
              helperText="Write something about your needs. You cann add fields for multiple needs. Does the email have to be friendly? formal? What are the key points?"
              fullWidth
            />
          </div>
        ))}
        {/* Bottom buttons for smaller screens */}
        {/* <Box className="fixed right-4 flex gap-2 lg:hidden">
          <Tooltip title="Add a need" placement="top">
            <IconButton onClick={addInputField}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          {needsInputs.length > 1 && (
            <Tooltip title="Delete a need" placement="top">
              <IconButton
                onClick={() => deleteInputField(needsInputs.length - 1)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box> */}
      </div>
    </Box>
  );
};

export default MyNeeds;
