FROM node:20.3.0
#ENV PNPM_HOME="/pnpm"
#ENV PATH="$PNPM_HOME:$PATH"
#RUN corepack enable
COPY . /app
WORKDIR /app
RUN ls -lsa
RUN rm -fr .output .nuxt
RUN pnpm install \
 #  && pnpm build \
   && ls -lsa /app \
 #  && npm install --global pm2 \ 
   && chown -R node:node /app

USER node
EXPOSE 3000
ENV HOST="0.0.0.0"
#CMD [ "node", ".output/server/index.mjs" ]
#CMD [ "pnpm", "start", "/app/.output/server/index.mjs" ]
#CMD ["sh", "-c" ,"pm2 list && pm2 start ecosystem.config.cjs --no-daemon"]
CMD [ "pnpm", "start" ]
