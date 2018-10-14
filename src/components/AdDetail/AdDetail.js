import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {bindActionCreators} from "redux";
import actions from "../../actions";
import connect from "react-redux/es/connect/connect";

const style = {};

class AdDetail extends Component {

    componentDidMount() {
        this.props.getCampaignById(this.props.match.params.id);
    }

    render() {
        const {classes, adCampaigns} = this.props;
        if (!adCampaigns) return (<div>Loading...</div>);
        const adCampaign = adCampaigns[0];
        return (
            <Card>
                <CardContent>
                    <Typography>
                        {adCampaign.name}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

AdDetail.propTypes = {
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    getCampaignById: PropTypes.func,
    adCampaigns: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCampaignById: actions.getCampaignById}, dispatch)
}

function mapStateToProps(state) {
    return {
        adCampaigns: state.adCampaigns
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(AdDetail));