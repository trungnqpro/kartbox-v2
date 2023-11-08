FROM node:20-alpine
RUN mkdir -p /home/node/app

WORKDIR /home/node/app
RUN rm -fr .nuxt/ node_modules/ package-lock.json
COPY . .

RUN node -v
RUN ls -lsa
RUN npm install \
   && npm run build \
   && npm install --global pm2 \
   && ls -lsa \
   && ls -lsa app \
   && chown -R node:node /home/node
USER node
EXPOSE 3000
ENV HOST="0.0.0.0"
#CMD ["sh", "-c" ,"pm2 list && pm2 start ecosystem.config.cjs --no-daemon"]
CMD ["node", ".output/server/index.mjs"]
