# adapted from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:10

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# copy application code after NPM install to reuse layers

COPY src ./src

# per https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

EXPOSE 3000

CMD [ "node", "src/server.js" ]
