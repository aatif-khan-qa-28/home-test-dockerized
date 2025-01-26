FROM mcr.microsoft.com/playwright:v1.50.0-jammy

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx playwright install
CMD ["npx", "playwright", "test"]