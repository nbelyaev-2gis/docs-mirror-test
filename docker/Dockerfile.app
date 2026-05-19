ARG NODE_IMAGE

FROM ${NODE_IMAGE} AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-audit

FROM deps AS builder

# Ставим Хромиум и смежные зависимости, необходимые для работы puppeteer. Java – для склейки PDF
RUN apk add --no-cache \
  openjdk17-jre \
  chromium \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  gettext

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Фикс неудачного запуска браузера в alpine образе
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ARG BRAND
ENV BRAND=${BRAND}
ARG APP_URL
ENV APP_URL=${APP_URL}
ARG DISTRIBUTION_MODE
ENV DISTRIBUTION_MODE=${DISTRIBUTION_MODE}
ARG APIKEY_MAPGL
ENV APIKEY_MAPGL=${APIKEY_MAPGL}
ARG APIKEY_MAPGL_JSFIDDLE
ENV APIKEY_MAPGL_JSFIDDLE=${APIKEY_MAPGL_JSFIDDLE}
ARG APIKEY_NAVIGATION
ENV APIKEY_NAVIGATION=${APIKEY_NAVIGATION}
ARG APIKEY_PLACES
ENV APIKEY_PLACES=${APIKEY_PLACES}
ENV NODE_OPTIONS="--max-old-space-size=12288"
ARG SEARCH_API_URL=''
ARG APIKEY_DOCS_SEARCH=''
ARG SEARCH_API_COLLECTION=''
ARG CHAT_BOT_API_URL=''
ARG S3_BUCKET_NAME=''
ARG GA_TRACKING_ID
ENV GA_TRACKING_ID=${GA_TRACKING_ID}
ARG UX_FEEDBACK_ID
ENV UX_FEEDBACK_ID=${UX_FEEDBACK_ID}

RUN envsubst '${SEARCH_API_URL} ${APIKEY_DOCS_SEARCH} ${SEARCH_API_COLLECTION} ${CHAT_BOT_API_URL} ${S3_BUCKET_NAME}' < nginx.conf.template > nginx.conf

RUN npm run build

RUN du -h -d 1 ./build

FROM docker-hub.2gis.ru/docker-io/nginx:1.29-alpine AS runner

WORKDIR /usr/src/service

COPY --from=builder /app/build /opt/static
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
