import actions from './../actions/CampaignsActions'

const initialState = {
    adCampaigns: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ADCAMPAIGN_BY_ID_SUCCESS:
        case actions.GET_ADCAMPAIGNS_SUCCESS:
            return {
                ...state,
                adCampaigns: action.payload
            };
        default:
            return state
    }
}

export default reducer