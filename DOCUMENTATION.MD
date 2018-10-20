Components
----------

**src\App.js**

### 1. App

Basically the entrypoint of this project, the router is declared here 

Path/Route | Component
:---|:---
/|AdList
/detail/:id|AdDetail

-----
**src\components\AdCard\AdCard.js**

### 2. AdCard

This component is used by the `AdList` component, and is rendered multiple times on the same view (for each AdCampaign)

Property | Type | Required | Description
:--- | :--- | :--- | :---
classes|object|yes|Styling
adCampaign|object|no| Contains a single AdCampaign's information
-----
**src\components\AdDetail\AdDetail.js**

### 3. AdDetail

Route Component (`/detail/:id`), displays in detail information about a single campaign

Property | Type | Required | Description
:--- | :--- | :--- | :---
match|object|yes| Contains information about the route parameters needed (:id)
classes|object|yes|Styling
getCampaignById|func|no| Call to the backend API which returns an AdCampaign by ID (saga)
adCampaigns|array|no|Contains AdCampaign objects
-----
**src\components\AdList\AdList.js**

### 4. AdList

Route Component (`/`), the HOME of the project. Displays a list of `AdCard`

Property | Type | Required | Description
:--- | :--- | :--- | :--- |
classes|object|yes|Styling
getAllCampaigns|func|no|Call to the backend API which returns all AdCampaigns (saga)
adCampaigns|array|no|Contains AdCampaign objects
-----

Redux and Sagas
----------

**src/actions/CampaignsActions.js**

### 1. Actions

Action | Description
:--- | :---
GET_ADCAMPAIGNS | Dispatched by `AdList`
GET_ADCAMPAIGNS_SUCCESS | Dispatched by `getAdCampaigns` Saga
GET_ADCAMPAIGNS_ERROR | Dispatched by `getAdCampaigns` Saga
GET_ADCAMPAIGN_BY_ID | Dispatched by `AdDetail`
GET_ADCAMPAIGN_BY_ID_SUCCESS | Dispatched by `getAdCampaignsById` Saga
GET_ADCAMPAIGN_BY_ID_ERROR | Dispatched by `getAdCampaignsById` Saga

### 2. Reducers

**src/reducers/CampaignsReducer.js**

This app has only one state, which contains only one property (`AdCampaigns`).
This property is used to store the effects from `GET_ADCAMPAIGNS_SUCCESS` and `GET_ADCAMPAIGN_BY_ID`.

`AdList` and `AdDetail` use the same property to show the campaign(s).
 
 ### 3. Sagas
 
 **src/sagas/CampaignsSaga.js**
 
 Saga | Description
 :--- | :---
 getAdCampaigns | Calls `CampaignsService.getAllCampaigns`, dispatches `GET_ADCAMPAIGNS_SUCCESS` and `GET_ADCAMPAIGNS_ERROR` 
 getAdCampaignsById | Calls `CampaignsService.getAdCampaignsById`, dipsatches `GET_ADCAMPAIGN_BY_ID_SUCCESS` and `GET_ADCAMPAIGN_BY_ID_ERROR`