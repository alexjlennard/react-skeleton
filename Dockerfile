# pull official base image
FROM node:10.22.1-alpine3.11 as build

# set working directory
WORKDIR /app

## install app dependencies
COPY package*.json /app/
RUN npm install --silent

# add app
COPY . ./

# build production image
RUN npm run build

# pull official base image #2
FROM nginx:1.17.7-alpine

# add build to production image
COPY --from=build /app/build /usr/share/nginx/html

# add nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# expost port 80
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
