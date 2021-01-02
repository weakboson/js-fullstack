FROM node:15.5.0-buster-slim
RUN apt-get update && apt-get install -y \
  libssl-dev \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
