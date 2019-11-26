FROM node:10-slim

WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . .

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD ["yarn","start"]