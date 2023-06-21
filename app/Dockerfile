FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY app.js ./


RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
