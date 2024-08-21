import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface MyNeedsProps {
  needsInput: string;
  setNeedsInput: React.Dispatch<React.SetStateAction<string>>;
}

const MyNeeds = ({ needsInput, setNeedsInput }: MyNeedsProps) => {
  // State to manage the list of input fields
  const [inputs, setInputs] = useState<string[]>(['']); // Initial empty input field

  // Function to add a new input field
  const addInputField = () => {
    setInputs([...inputs, '']);
  };

  // Function to handle changes in any of the input fields
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setNeedsInput(event.target.value);
  };

  // Function to delete an input field
  const deleteInputField = (index: number) => {
    if (inputs.length > 1) {
      setInputs(inputs.filter((_, i) => i !== index));
    }
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
      <div className="relative flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {inputs.map((input, index) => (
            <div className="flex items-center" key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TextField
                  value={needsInput}
                  onChange={e => handleInputChange(index, e)}
                  label={`My Need ${index + 1}`}
                  helperText="Write something about your needs. Does the email have to be friendly? formal? What are the key points?"
                />
                {index != 0 && (
                  <Tooltip title="delete a need" placement="top">
                    <IconButton
                      onClick={() => deleteInputField(index)}
                      className="ml-2"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              {/* Show the button only next to the last input field */}
              {index === inputs.length - 1 && (
                <Tooltip title="Add a need" placement="top">
                  <IconButton onClick={addInputField} className="ml-2">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default MyNeeds;
