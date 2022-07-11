FROM node:10.16.0 as build

WORKDIR /app

COPY ./frontend /app/

RUN npm install --global yarn

RUN yarn install

RUN yarn build

FROM nginx

COPY --from=build /app/build/ /usr/share/nginx/html

COPY --from=build /app/conf/conf.d/default.conf /etc/nginx/conf.d/default.conf
