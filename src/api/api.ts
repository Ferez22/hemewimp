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
              'I am going to give you my needs and you Write me a good solid prompt for chatgpt so it helps me figure out a path, be creative and useful. You are a great prompt engineer'
          },
          {
            role: 'user',
            content: prompt
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
