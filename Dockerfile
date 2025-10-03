FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/server/package.json ./packages/server/
RUN npm ci --include=dev
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=build /app/packages/server/dist ./dist
COPY --from=build /app/packages/server/package.json ./package.json
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/index.js"]
