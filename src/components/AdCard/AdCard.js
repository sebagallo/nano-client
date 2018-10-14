import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {};

class AdCard extends Component {

    render() {
        const {classes, adCampaign} = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography>
                        {adCampaign.name}
                    </Typography>
                    <Typography variant="h6">
                        {adCampaign.goal}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={`/detail/${adCampaign.id}`}>Details</Button>
                </CardActions>
            </Card>
        )
    }
}

AdCard.propTypes = {
    classes: PropTypes.object.isRequired,
    adCampaign: PropTypes.object
};

export default withStyles(styles)(AdCard);