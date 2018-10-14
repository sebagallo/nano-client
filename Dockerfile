FROM node:8

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn && yarn build
EXPOSE 5000
CMD ["yarn", "run", "serve"]
