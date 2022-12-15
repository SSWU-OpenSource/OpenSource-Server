FROM node:12-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
ENV db_host mysql
ENV db_user root
ENV db_password password
ENV db_database board
COPY . /app
CMD node ./src/index.js
EXPOSE 3000
