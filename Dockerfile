FROM node:alpine

COPY ./ /orkeystore/
WORKDIR /orkeystore/

RUN npm install
RUN npm run build 
EXPOSE 3000

CMD ["npm", "run", "start:prod"]