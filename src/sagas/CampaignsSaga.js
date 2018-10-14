import {call, put, takeLatest} from 'redux-saga/effects'
import actions from '../actions/CampaignsActions'
import CampaignsService from '../services/CampaignsService'

function* getAdCampaigns() {
    try {
        const response = yield call(CampaignsService.getAllCampaigns);
        yield put({type: actions.GET_ADCAMPAIGNS_SUCCESS, payload: response.data})
    } catch (err) {
        yield put({type: actions.GET_ADCAMPAIGNS_ERROR, payload: err})
    }
}

function* getAdCampaignsById(action) {
    try {
        const response = yield call(CampaignsService.getCampaignById(action.payload));
        yield put({type: actions.GET_ADCAMPAIGN_BY_ID_SUCCESS, payload: response.data})
    } catch (err) {
        yield put({type: actions.GET_ADCAMPAIGN_BY_ID_ERROR, payload: err})
    }

}

function* CampaignsSaga() {
    yield takeLatest(actions.GET_ADCAMPAIGNS, getAdCampaigns);
    yield takeLatest(actions.GET_ADCAMPAIGN_BY_ID, getAdCampaignsById);
}

export default CampaignsSaga