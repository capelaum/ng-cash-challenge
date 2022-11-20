FROM node:18

WORKDIR /app/api

COPY package.json .

RUN yarn install

COPY prisma/schema.prisma ./prisma/
RUN yarn prisma generate

COPY . .

EXPOSE 3333

CMD ["sh", "-c", "yarn start:docker"]
