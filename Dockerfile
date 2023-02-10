ARG env

FROM node:14-alpine AS base

ENV NODE_ENV=$env

WORKDIR /app
COPY . /app

RUN npm install -g pnpm@7.24.3
RUN pnpm install


RUN if [ "$NODE_ENV" = "production" ]; then \
      pnpm run build; \
    fi

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then \
        pnpm run start:prod; \
    else \
        echo "developement mode"; \
        pnpm run start:dev; \
    fi