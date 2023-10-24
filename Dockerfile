FROM node:20-alpine
RUN mkdir -p /app

WORKDIR /app
RUN rm -fr .nuxt/ node_modules/ package-lock.json
COPY . .
RUN npm install \
   && npm run build \
   && npm install --global pm2 \
   && chown -R node:node /app
USER node
EXPOSE 3000
ENV HOST="0.0.0.0"
CMD ["sh", "-c" ,"pm2 list && pm2 start ecosystem.config.js --no-daemon"]
