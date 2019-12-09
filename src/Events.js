import React, { Component } from 'react'
import pageStyles from './styles/pageStyles';
import ACard from './ACard';
import { withStyles } from '@material-ui/core/styles';

//Fix imgUrl and ACard img prop
class Events extends Component {
    constructor(props){
        super(props)
        this.state = {
            eventCards: [],
        }
    }
    componentDidMount(){
        this.setState({ eventCards: this.props.seedCards.filter(seedCard => seedCard.cardType === 'event')})
    }
    render() {
        const { classes } = this.props;
        const { eventCards } = this.state;
        return (
            <div className={classes.content}>
                {eventCards.map((card, i)  => 
                    <ACard card={card} key={i} />
                )}
            </div>
        )
    }
}

export default withStyles(pageStyles)(Events);