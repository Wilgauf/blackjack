import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'lightgrey',
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
  avatar: {
    backgroundColor: red[500],
  },
  icon: {
    fill: blue,
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Wilson Gauf"
        subheader="Full Stack Software Engineer"
      />
      <CardMedia
        className={classes.media}
        image={require("../../images/wilson.jpeg").default}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Backend development and assisted in implementation of the frontend development.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to="https://www.linkedin.com/in/wilson-gauf/" target="_blank" >
          <IconButton aria-label="Link to Linkedin">
            <LinkedInIcon style={{color: 'rgba(11, 102, 194, 1)'}}/>
          </IconButton>
        </Link>
          <IconButton aria-label="Github">
            <Link to="https://github.com/Wilgauf" target="_blank"  >
              <GitHubIcon style={{color: 'rgba(0, 119, 183, 1)'}}/>
            </Link>
          </IconButton>

      </CardActions>
    </Card>
  );
}