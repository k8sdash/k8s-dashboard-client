FROM mhart/alpine-node:14 AS builder
WORKDIR /app
COPY . .
#RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node:14
RUN addgroup -S k8sdash
RUN adduser -S k8sdash -G k8sdash
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
USER k8sdash
CMD ["serve", "-p", "80", "-s", "."]
