FROM node:18

WORKDIR /app/web

COPY package.json .
COPY yarn.lock .
COPY next.config.js .

COPY src/ ./src
COPY public ./public

RUN yarn install

RUN yarn build

CMD ["sh", "-c", "yarn start"]
