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