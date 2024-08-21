import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Typography variant="h6" component="div">
        Introducing <b>Hemewimp</b>, your new go-to app for crafting the perfect
        prompts effortlessly! Writing a good prompt is crucial for getting the
        best results from your chatbot. <b>Hemewimp</b> helps you create a
        clear, concise, and effective prompt by guiding you through the process.
        For instance, you can describe your goal, list your needs, and generate
        a prompt that you can use with ChatGPT or any other chatbot.
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>
    <CardActions>
      <Button size="small">
        {/* <Link to="/">
          <IconButton aria-label="Example">
            <HomeOutlinedIcon />
          </IconButton>
        </Link> */}
        learn
      </Button>
      learn
    </CardActions>
  </React.Fragment>
);

export default function AboutPage() {
  return (
    <Box
      sx={{
        maxWidth: 800,
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
