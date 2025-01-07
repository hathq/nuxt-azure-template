FROM mcr.microsoft.com/devcontainers/base:latest

# 開発環境で必要なツールをインストール
# Node.js, NPM, Docker CLI, Azure CLI など

# Node.js (Using nvm)
RUN apt-get update && apt-get install -y curl git \
    && curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest yarn nuxt

# Docker CLI
RUN apt-get update && apt-get install -y docker.io

# Azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# Cleanup
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces

# 設定はdevcontainer.jsonで行われるのでここでは最低限
