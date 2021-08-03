import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom'
import willy from "../../images/wilson.jpeg"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 10px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  icon: {
    fill: blue,
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Wilson Gauf"
        subheader="Full Stack Software Engineer"
      />
      <CardMedia
        className={classes.media}
        image={willy}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Frontend Developer, backend engineer, and bad at blackjack. Led front end development and consulted with the backend.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href="https://www.linkedin.com/in/wilson-gauf/"  target="_blank" >
          <IconButton aria-label="Link to Linkedin">
            <LinkedInIcon style={{color: 'rgba(11, 102, 194, 1)'}}/>
          </IconButton>
        </a>
          <IconButton aria-label="Github">
            <a href="https://github.com/Wilgauf" target="_blank"  >
              <GitHubIcon style={{color: 'rgba(0, 119, 183, 1)'}}/>
            </a>
          </IconButton>
          <IconButton aria-label="personal">
            <a href="https://wilsongauf.com" target="_blank"  >
              <SportsVolleyballIcon style={{color: 'rgba(0, 119, 183, 1)'}}/>
            </a>
          </IconButton>

      </CardActions>
    </Card>
  );
}