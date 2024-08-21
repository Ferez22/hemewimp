import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, marginBottom: '15px' }}
        color="text.secondary"
        gutterBottom
      >
        Welcome to Hemewimp!
      </Typography>
      <Typography variant="body1" component="div">
        Introducing <b>Hemewimp</b>, your new go-to app for crafting the perfect
        prompts effortlessly! Writing a good prompt is crucial for getting the
        best results from your chatbot. <b>Hemewimp</b> helps you create a
        clear, concise, and effective prompt by guiding you through the process.
        For instance, you can describe your goal, list your needs, and generate
        a prompt that you can use with ChatGPT or any other chatbot.
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <br /> It is basically a simple prompt generator.
      </Typography>
    </CardContent>
    <CardActions>
      <Link to="/">
        <Button>
          <HomeOutlinedIcon />
          <span className="ml-3 text-xs">Go back to homescreen</span>
        </Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function AboutPage() {
  return (
    <Box
      sx={{
        width: { xs: '90%', s: '60%', md: '50%' },
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Card variant="elevation">{card}</Card>
    </Box>
  );
}
