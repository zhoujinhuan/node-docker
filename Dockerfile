# syntax=docker/dockerfile:1
FROM node:14.18.1-alpine As dev
WORKDIR /app
COPY ["package.json","package-lock.json*", "./"]
RUN npm install --production
COPY . .
RUN npm run build


#FROM node:14.18.1-alpine as     production
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /usr/src/app
#
#COPY package*.json ./
#
#RUN npm install --only=production
#
#COPY . .
#
#COPY --from=development app/dist ./dist
#
CMD ["npm", "run", "start"]
#ENTRYPOINT ["UserController.ts"]
#CMD ["echo","Image created"]