import React, {Component} from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            <strong>Ad Campaigns Test App!</strong>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);