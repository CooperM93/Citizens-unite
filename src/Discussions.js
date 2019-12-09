import React, { Component } from 'react'
import ACard from './ACard';
import pageStyles from './styles/pageStyles';
import { withStyles } from '@material-ui/core/styles';



class Discussions extends Component {
    constructor(props){
        super(props)
        this.state = {
            disCards: [],
        }
    }
    componentDidMount(){
        this.setState({ disCards: this.props.seedCards.filter(seedCard => seedCard.cardType === 'discussion')})
    }
    render() {
        const { classes } = this.props;
        const { disCards } = this.state;
        return (
                <div className={classes.content} >
                    {disCards.map((card, i)  => 
                        <ACard card={card} key={i}/>
                )}
                </div>
        )
    }
}

export default withStyles(pageStyles)(Discussions);