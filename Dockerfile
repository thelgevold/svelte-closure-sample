FROM node:alpine

WORKDIR /usr/src/app

COPY server.js /usr/src/app
COPY package.json ./

RUN npm i

COPY public /usr/src/app/public

CMD [ "node", "server.js" ]