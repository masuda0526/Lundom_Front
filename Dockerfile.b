# 1. Linux環境（Debianベース）でNode.jsを使う
FROM node:20

WORKDIR /app

# 依存ファイルを先にコピー（キャッシュ効かせる）
COPY package*.json ./

# 依存関係をインストール（開発用も含む）
RUN npm ci

# ソースコードをコピー
COPY . .

# 本番用ビルドを実行（Next.js）
RUN npm run build