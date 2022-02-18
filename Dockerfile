# FROM node:alpine

# RUN mkdir -p /usr/src/app
# ENV PORT 3000

# WORKDIR /usr/src/app

# COPY package.json /usr/src/app

# # Production use node instead of root
# # USER node

# RUN npm install  \
#     npm run build

# COPY ./app/ /usr/src/app

# EXPOSE 3000

# CMD [ "npm", "run", "start" ]

FROM node:12-alpine AS BUILD_IMAGE

# # couchbase sdk requirements
# RUN apk update && apk add python make g++ && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY app/package.json .

# install dependencies
RUN yarn --frozen-lockfile

COPY ./app .

# build application
RUN npm run build

# remove development dependencies
RUN npm prune 

#--production

FROM node:12-alpine

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/package.json .
COPY --from=BUILD_IMAGE /usr/src/app/build ./build
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD [ "npm", "run", "start" ]
