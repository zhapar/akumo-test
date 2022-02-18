FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN npm install  
#--production

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
EXPOSE 80

CMD [ "npm", "run", "start" ]