import React, { Component } from 'react'
import styles from './styles/SearchBarStyles';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CehvronRightIcon from '@material-ui/icons/ChevronRight'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            scroll: false,
            slide: 0,
            lastScrollY: 0
        }
        this.handleClickAway = this.handleClickAway.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll= () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;
        currentScrollY > lastScrollY
        ? this.setState({ 
                scroll: true,
                slide: '-70px' 
            })
        : this.setState({ slide: '0px', scroll: false });
          this.setState({ lastScrollY: currentScrollY });
    }
    handleExpand = e => {
        e.preventDefault();
        this.setState({expanded: true})
    }
    handleClickAway() {
        this.setState({expanded: false});
    }
    render() {
        const { classes } = this.props;
        const { expanded, scroll } = this.state;
        return (
            <div 
                className={clsx(classes.container, {
                    [classes.expanded]: expanded,
                    [classes.minimized]: !expanded,
                    [classes.scrolling]: scroll
                })} 
                style={{
                }}>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="filter">
                            <MenuIcon />
                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical" />
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        {expanded
                            ?   <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                        
                            :   <IconButton type="button" onClick={this.handleExpand} disableRipple={true} className={classes.iconButton} aria-label="expand-search">
                                    <CehvronRightIcon />
                                </IconButton>
                            }
                    </Paper>
                </ClickAwayListener>
            </div>
        )
    }
};

export default withStyles(styles)(SearchBar);