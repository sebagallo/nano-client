import React, {Component} from "react";
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import {withStyles} from '@material-ui/core/styles'
import AdCard from '../AdCard/AdCard';

const style = theme => ({
    AdList: {
        marginTop: 8,
        marginBottom: 8,
        [theme.breakpoints.up("lg")]: {
            width: 1170,
            marginTop: 20,
            marginBottom: 20,
        },
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

class AdList extends Component {
    componentDidMount() {
        this.props.getAllCampaigns()
    }

    render() {
        const {classes, adCampaigns} = this.props;
        if (!adCampaigns) return (<div>Loading...</div>);
        return (
            <Grid justify="center" container className={classes.AdList} spacing={16}>
                {adCampaigns.map((adCampaign, key) => (
                    <Grid key={key} item xs={12} sm={4}>
                        <AdCard adCampaign={adCampaign}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

AdList.propTypes = {
    classes: PropTypes.object.isRequired,
    getAllCampaigns: PropTypes.func,
    adCampaigns: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllCampaigns: actions.getAllCampaigns}, dispatch)
}

function mapStateToProps(state) {
    return {
        adCampaigns: state.adCampaigns
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AdList));