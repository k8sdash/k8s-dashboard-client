FROM mhart/alpine-node:16 AS builder
WORKDIR /app
COPY . .
#RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node:16
RUN adduser -S 1000
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
USER 1000
CMD ["serve", "-p", "3000", "-s", "."]
