
FROM node:22-alpine AS build
WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install --frozen-lockfile


COPY . .


RUN yarn build


FROM node:22-alpine AS runner
WORKDIR /app


COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/yarn.lock ./


RUN yarn global add vite

EXPOSE 4173


CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
