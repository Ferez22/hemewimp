import React, { useState } from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GeneratedPrompt from '../components/generated-prompt';
import WaitingForAResponse from '../components/waiting-for-a-reponse';
import { generatePrompt } from '../api/api';

const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const [needsInputs, setNeedsInputs] = useState<string[]>(['']); // State for needs inputs
  const [response, setResponse] = useState<string>('');
  const [waitingForAReponse, setWaitingForAResponse] = useState<boolean>(false);

  const handleSubmit = async () => {
    setWaitingForAResponse(true);
    setResponse('');
    const prompt = `I want to ${descriptionInput}\n and here are the important needs: ${needsInputs.join(
      ', '
    )}`;

    try {
      setResponse(await generatePrompt(prompt));
      setWaitingForAResponse(false);
    } catch (error) {
      console.error('Error sending request to OpenAI:', error);
    }
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '12px',
          md: '32px'
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <h1 className="text-l">Fill in this form and generate a prompt</h1>
        <Tooltip
          title=" This app helps you write a prompt that you later will use with chatgpt
          or any other Chatbot. Make sure to be precise with your goal and your
          needs so the generated prompt is as clear as it can be. It is
          suggested that you modify the generated prompt to your needs, since
          this is only a start"
        >
          <IconButton>
            <InfoOutlinedIcon sx={{ fontSize: '0.8rem' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ marginTop: '30px' }}>
        <MyDescription
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
        />
        <MyNeeds needsInputs={needsInputs} setNeedsInputs={setNeedsInputs} />
      </Box>

      <Button
        disabled={!descriptionInput || needsInputs.some(need => !need)}
        variant="contained"
        sx={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        Generate a prompt
      </Button>

      {waitingForAReponse && <WaitingForAResponse open={waitingForAReponse} />}
      {response && <GeneratedPrompt response={response} />}
    </Box>
  );
};

export default FormPage;
