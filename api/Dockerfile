FROM node:18

WORKDIR /app/api

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD [ "yarn", "start:docker" ]
