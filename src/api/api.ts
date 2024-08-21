import axios from 'axios';

export const generatePrompt = async prompt => {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are a prompt engineer, your only job is to write a prompt from the information that is given to you. Make sure your prompt is as clear as it gets. You should understand what the user is looking for and generate a prompt that is clear. Start with "you are a specialist in". The prompt should be clear, maximum of 500 words and be creative ! dont be shy to propose alternatives'
          },
          {
            role: 'user',
            content: `'You are a prompt engineer, your only job is to write a prompt from the information that is given to you. Make sure your prompt is as clear as it gets ${prompt}`
          }
        ],
        max_tokens: 550,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error('Error sending request to OpenAI:', error);
  }
};
