import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ProgressBar from './ProgressBar';
//Must figure out a way to work with media when imported from back-end
//Change the date to display the Date.now()/props.created in a readable form

const styles = theme => ({
  card: {
    width: '100%',
    margin: '10px 0px',
    backgroundColor: 'RGB(24,27,28)',
    color: 'white'
  },
  media: {
    overflow:"hidden",
    height: 100,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'cover'
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
  subheader: {
    color: 'rgba(155, 158, 159, 1)'
  }
});

class ACard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    }
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }
  handleExpandClick() {
    this.setState({expanded: !this.state.expanded});
  };
  render() {
    const { 
      cardUser, 
      cardType, 
      cardTitle, 
      imgTitle,
      imgUrl,
      cardSummary, 
      cardContent, 
      fundingGoal, 
      fundingRaised,
    } = this.props.card;
    const { classes } = this.props;
    const {
      expanded
    } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar" className={classes.avatar}>
              {cardUser.slice(0,1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" color='inherit'>
              <MoreVertIcon />
            </IconButton>
          }
          title={cardTitle}
          subheader="September 14, 2016"
          classes={{subheader: classes.subheader}}
        />
        <CardMedia
          className={classes.media}
          wide
          image={imgUrl}
          title={imgTitle}
        />
        <CardContent>
          <Typography variant="body2" color="inherit" component="p">
            {cardSummary}  
          </Typography>
          {cardType === 'fundraising' && <ProgressBar goal={fundingGoal} raised={fundingRaised}/>}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" color='inherit'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" color='inherit'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            color='inherit'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {cardContent}
          </CardContent>
        </Collapse>
          </Card>
    );
  }
}

export default withStyles(styles)(ACard);