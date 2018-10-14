import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import appconfig from "../configs/appconfig";

// enhance the original axios adapter with throttle and cache enhancer
const http = axios.create({
    baseURL: appconfig.apiUrl,
    headers: { 'Cache-Control': 'no-cache' },
    adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

function getAllCampaigns() {
    return http.get(appconfig.campaignsEndpoint);
}

function getCampaignById(id) {
    return http.get(appconfig.campaignByIdEndpoint + id);
}

export default {
    getAllCampaigns,
    getCampaignById
}