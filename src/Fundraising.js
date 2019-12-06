import React, { Component } from 'react'
import pageStyles from './styles/pageStyles';
import ACard from './ACard';
import { withStyles } from '@material-ui/core/styles';
import seedCards from './seedCards';

class Fundraising extends Component {
    constructor(props){
        super(props)
        this.state = {
            fundraisingCards: [],
        }
    }
    componentDidMount(){
        this.setState({ fundraisingCards: seedCards.filter(seedCard => seedCard.cardType === 'fundraising')})
    }
    render() {
        const { classes } = this.props;
        const { fundraisingCards } = this.state;
        return (
            <div className={classes.content}>
                {fundraisingCards.map((card, i)  => 
                    <ACard card={card} key={i} />
                )}
            </div>
        )
    }
}

export default withStyles(pageStyles)(Fundraising);