# Alkaid Plus 文档站点 Dockerfile
# 支持 ARM64 和 AMD64 架构

# 构建阶段
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制 workspace 配置
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml* ./

# 复制所有 packages
COPY packages ./packages

# 复制文档源码
COPY frontend-docs ./frontend-docs

# 安装依赖
RUN pnpm install --frozen-lockfile || pnpm install

# 构建文档
WORKDIR /app/frontend-docs
RUN pnpm build

# 生产阶段
FROM --platform=$TARGETPLATFORM nginx:alpine AS production

# 复制构建产物
COPY --from=builder /app/frontend-docs/.vitepress/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY frontend-docs/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
