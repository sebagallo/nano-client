import React, {Component} from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom'

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Header extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            <Link to='/'>
                                <strong>Ad Campaigns Test App!</strong>
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);