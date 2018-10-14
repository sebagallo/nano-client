import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {};

class AdDetail extends Component {

    render() {
        const {classes, adCampaign} = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography>
                        TEST
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

AdDetail.propTypes = {
    classes: PropTypes.object.isRequired,
    adCampaign: PropTypes.object
};

export default withStyles(styles)(AdDetail);