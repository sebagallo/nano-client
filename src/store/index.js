import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';
import CampaignsReducer from "../reducers/CampaignsReducer";
import CampaignsSaga from "../sagas/CampaignsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    CampaignsReducer,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware,
    ))
);

sagaMiddleware.run(CampaignsSaga);

export default store