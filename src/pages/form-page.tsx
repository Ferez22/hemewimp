import React, { useState } from 'react';
import MyDescription from '../components/my-description';
import MyNeeds from '../components/my-needs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import GeneratedPrompt from '../components/generated-prompt';

const FormPage = () => {
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  const [needsInputs, setNeedsInputs] = useState<string[]>(['']); // State for needs inputs
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async () => {
    const prompt = `this is my goal: ${descriptionInput}\n and here are my needs: ${needsInputs.join(
      ', '
    )}`;

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions', // Correct endpoint for ChatGPT models
        {
          model: 'gpt-3.5-turbo', // or 'gpt-4' if available
          messages: [
            {
              role: 'system',
              content:
                'I am going to give you my needs and you Write me a good solid prompt for chatgpt so it helps me figure out a path, be creative and useful. You are a great prompt engineer'
            }, // Optional: set the system message to control the behavior
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 550, // Adjust max_tokens as per your requirements
          temperature: 0.7 // Adjust temperature to control creativity
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setResponse(res.data.choices[0].message.content ?? ''); // Extracting the response from the API
    } catch (error) {
      console.error('Error sending request to OpenAI:', error);
    }
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
        variant="contained"
        sx={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        Generate a prompt
      </Button>
      {/* <GeneratedPrompt response={response} /> */}
      {response && <GeneratedPrompt response={response} />}
    </Box>
  );
};

export default FormPage;
