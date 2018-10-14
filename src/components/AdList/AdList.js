import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import actions from '../../actions';
import {withStyles} from '@material-ui/core/styles'
import AdCard from '../AdCard/AdCard';

const style = {};

class AdList extends Component {
    componentDidMount() {
        this.props.getAllCampaigns()
    }

    render() {
        const {classes, adCampaigns} = this.props;
        if (!adCampaigns) return (<div>Loading...</div>);
        return (
            <div>
                {adCampaigns.map(adCampaign => (<AdCard adCampaign={adCampaign}/>))}
            </div>
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