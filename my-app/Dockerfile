FROM node:20
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --global pm2
COPY ./package.json  ./package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY ./ ./
RUN npm run build

EXPOSE 3000
