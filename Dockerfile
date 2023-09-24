FROM --platform=linux/amd64 node:16-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 nginx:1.17.1-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
