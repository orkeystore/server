FROM node:alpine

COPY ./ /orkeystore/
WORKDIR /orkeystore/

RUN npm install
RUN npm run build 
EXPOSE 3000
EXPOSE 3001

CMD ["npm", "run", "start:prod"]