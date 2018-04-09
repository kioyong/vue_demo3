FROM node:8.9-alpine
ADD . /app/
WORKDIR /app
RUN npm install
RUN npm rebuild node-sass --force
ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80
CMD npm start