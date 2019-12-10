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
    maxWidth: '750px',
    margin: '10px 0px',
    backgroundColor: 'RGB(32,37,38)',
    color: 'white',
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.5rem'
  },
  subheader: {
    flexDirection: 'column',
    color: 'rgba(155, 158, 159, 1)',
    padding: '16px',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cardUser: {
    lineHeight: 1,
    fontSize: '.9rem',
  },
  created: {
    lineHeight: 1.5,
    fontSize: '.8rem'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardSummary: {
    maxWidth: '300px'
  },
  ProgressBar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    alignItems: 'center',
    overflow:"hidden",
    width: 160, // 16:9
    height: 90,
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
      created
    } = this.props.card;
    const { classes } = this.props;
    const {
      expanded
    } = this.state

    return (
      <Card className={classes.card}>
        <div className={classes.header}>
          <CardHeader
            title={cardTitle}
            classes={{title: classes.title}}
          />
          <div className={classes.subheader}>
          <Typography variant='subtitle1' className={classes.cardUser}>Posted by {cardUser}</Typography>
          <Typography variant='subtitle2' className={classes.created}>on {created}</Typography>
          </div>
        </div>
        <CardContent className={classes.content}>
          <div className={classes.cardSummary}>
            <Typography variant="body2" color="inherit" component="p">
              {cardSummary} 
            </Typography>
            {cardType === 'fundraising' && <ProgressBar className={classes.ProgressBar} goal={fundingGoal} raised={fundingRaised}/>}
          </div>
          
          <CardMedia
            className={classes.media}
            wide
            image={imgUrl}
            title={imgTitle}
          />
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="settings" color='inherit'>
              <MoreVertIcon />
          </IconButton>
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