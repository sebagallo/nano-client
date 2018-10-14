import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Moment from 'react-moment';
import {bindActionCreators} from "redux";
import actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import CardActions from "@material-ui/core/CardActions/CardActions";

const style = theme => ({
    AdDetail: {
        marginTop: 8,
        marginBottom: 8,
        [theme.breakpoints.up("lg")]: {
            width: 1170,
            marginTop: 20,
            marginBottom: 20,
        },
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardMedia: {
        minWidth: '100%',
        minHeight: '100%'
    },
    cardMedia__inner: {
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)'
    },
    platformContainer: {
        marginTop: 16,
        marginBottom: 16
    }
});

class AdDetail extends Component {

    componentDidMount() {
        this.props.getCampaignById(this.props.match.params.id);
    }

    render() {
        const {classes, adCampaigns} = this.props;
        if (!adCampaigns) return (<div>Loading...</div>);
        const adCampaign = adCampaigns[0];
        return (
            <Card className={classes.AdDetail}>
                <CardContent>
                    <Typography variant="h4">
                        {adCampaign.name} - {adCampaign.goal} ({adCampaign.status})
                    </Typography>
                    <Typography variant="h6">
                        Total Budget: {adCampaign.total_budget}
                    </Typography>
                </CardContent>
                <CardContent>
                    {Object.keys(adCampaign.platforms).map(key => {
                        return (
                            <Card className={classes.platformContainer} key={key}>
                                <Grid justify="center" container spacing={16}>
                                    <Grid item xs={12} sm={6}>
                                        <CardContent>
                                            <Typography variant="h5">
                                                {key.toUpperCase()}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            Status: {adCampaign.platforms[key].status} <br/>
                                            Start Date: <Moment format="YYYY-MM-DD">{adCampaign.platforms[key].start_date}</Moment> <br/>
                                            End Date: <Moment format="YYYY-MM-DD">{adCampaign.platforms[key].end_date}</Moment> <br/>
                                            Remaining Budget: {adCampaign.platforms[key].remaining_budget} <br/>
                                            Total Budget: {adCampaign.platforms[key].total_budget} <br/>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h6">
                                                Target Audience
                                            </Typography>
                                            Age Range: {adCampaign.platforms[key].target_audiance.age_range.join(', ')} <br/>
                                            Genders: {adCampaign.platforms[key].target_audiance.genders.join(', ')} <br/>
                                            Interests: {adCampaign.platforms[key].target_audiance.interests.join(', ')} <br/>
                                            Languages: {adCampaign.platforms[key].target_audiance.languages.join(', ')} <br/>
                                            Locations: {adCampaign.platforms[key].target_audiance.locations.join(', ')} <br/>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h6">
                                                Insights
                                            </Typography>
                                            Advanced KPI 1: {adCampaign.platforms[key].insights.advanced_kpi_1} <br/>
                                            Advanced KPI 2: {adCampaign.platforms[key].insights.advanced_kpi_2} <br/>
                                            Click Through Rate: {adCampaign.platforms[key].insights.click_through_rate} <br/>
                                            Clicks: {adCampaign.platforms[key].insights.clicks} <br/>
                                            Cost Per Click: {adCampaign.platforms[key].insights.cost_per_click} <br/>
                                            Impressions: {adCampaign.platforms[key].insights.impressions} <br/>
                                            Nanos Score: {adCampaign.platforms[key].insights.nanos_score} <br/>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CardMedia className={classes.cardMedia} image={'/assets/images/' + adCampaign.platforms[key].creatives.image}>
                                            <div className={classes.cardMedia__inner}>
                                                <Typography variant="h6">
                                                    Creatives
                                                </Typography>
                                                Header: {adCampaign.platforms[key].creatives.header} <br/>
                                                Description: {adCampaign.platforms[key].creatives.description} <br/>
                                                Url: <a rel="noopener noreferrer" target="_blank" href={adCampaign.platforms[key].creatives.url}>{adCampaign.platforms[key].creatives.url}</a> <br/>
                                            </div>
                                        </CardMedia>
                                    </Grid>
                                </Grid>
                            </Card>
                        );
                    })}
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="secondary" component={Link} to={`/`}>Go Back</Button>
                </CardActions>
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