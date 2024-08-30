FROM node:20.11.1-alpine3.19
RUN npm install swagger-typescript-api@13.0.3 -g
RUN mkdir /local
WORKDIR /local
COPY . .
CMD ["sh", "generate.sh"]
