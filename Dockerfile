FROM node:lts-alpine3.13 AS BUILD_IMAGE

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM node:lts-alpine3.13

WORKDIR /usr/app

COPY --from=BUILD_IMAGE /usr/app/build ./build
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "./build/server.js"]
