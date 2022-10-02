FROM node:18-slim

WORKDIR /usr/src/app

RUN apt-get clean && apt-get update

CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev