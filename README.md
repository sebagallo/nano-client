# Example React.js Client

A small client written using React.js, Redux, Redux-sage, Material UI, Axios

### Installation

Run `yarn`

### Configuration

To set the API Service address to use, you need to pass a build argument/environment variable `REACT_APP_API_URL` (if using docker).
If using this as standalone, the configuration can be found in `appconfig.js`

### Running

After installation:

* `yarn start` for the development environment @ port `3000`
* `yarn build && yarn serve` for the production environment @ port `5000`

Alternatively, there's a docker image available (this project is supposed to be run through docker-compose anyway)

### Documentation

Component documentation can be at [DOCUMENTATION.MD](DOCUMENTATION.MD)

### TODO

* Unit Tests
* E2E Tests
* Error Handling
* Refactoring components by extracting the css and jsx template (?)
* If the project becomes big, refactor of reducers/sagas by using combiners
* Implement a route guard for the detail route that checks if the AdCampaign is already present in the State before calling the API
