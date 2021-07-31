import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
        title="Andrew Austin"
        subheader="Full Stack Software Engineer"
      />
      <CardMedia
        className={classes.media}
        image={require("../../images/andrew.jpeg").default}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Designed the UX/UI and assisted in implementation of the frontend development.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to="https://www.linkedin.com/in/andrew-d-austin/" target="_blank" >
          <IconButton aria-label="Link to Linkedin">
            <LinkedInIcon style={{color: 'rgba(11, 102, 194, 1)'}}/>
          </IconButton>
        </Link>
        <IconButton aria-label="Github">
            <Link to="https://github.com/andrewaustin12" target="_blank"  >
              <GitHubIcon style={{color: 'rgba(0, 119, 183, 1)'}}/>
            </Link>
          </IconButton>

      </CardActions>
    </Card>
  );
}