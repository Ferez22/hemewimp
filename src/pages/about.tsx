import React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';

const AboutPage = () => {
  return (
    <Box sx={{ padding: '50px' }}>
      <ReactMarkdown>
        {`
## Welcome to Hemewimp!

Introducing **Hemewimp**, your new go-to app for crafting the perfect prompts effortlessly!

Writing a good prompt is crucial for getting the best results from your chatbot. Hemewimp helps you create a clear, concise, and effective prompt by guiding you through the process.

For instance, you can describe your goal, list your needs, and generate a prompt that you can use with ChatGPT or any other chatbot.
        `}
      </ReactMarkdown>
    </Box>
  );
};

export default AboutPage;
