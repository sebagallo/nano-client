FROM node:8

WORKDIR /usr/src/app

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn && yarn build
EXPOSE 5000
CMD ["yarn", "run", "serve"]
