# ベースとなるDockerイメージ指定
FROM node:14

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージ.jsonとパッケージ-lock.json（あれば）をコピー
COPY package*.json ./

# パッケージをインストール
RUN npm install

# ESLintをインストール
RUN npm install eslint --save-dev

# MapBoxを日本語で表示する用のパッケージをインストール
RUN npm install --save mapbox-gl @mapbox/mapbox-gl-language

# アプリケーションのソースをバンドル
COPY . .

# ポートを開放
EXPOSE 8080