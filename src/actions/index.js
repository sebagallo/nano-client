import actions from "./CampaignsActions"

const getAllCampaigns = () => ({
    type: actions.GET_ADCAMPAIGNS,
});

const getCampaignById = (id) => ({
    type: actions.GET_ADCAMPAIGN_BY_ID,
    payload: id
});

export default {
    getAllCampaigns,
    getCampaignById,
}