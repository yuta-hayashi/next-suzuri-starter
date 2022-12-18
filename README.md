# Next SUZURI Starter

Next.js, NextAuth.js で SUZURI API の OAuth を使うサンプルプロジェクトのアルファ版です。

## 始め方

まずは `.env.local.example`を`.env.local`というファイル名でコピーし環境変数をそれぞれ設定します。
`OAUTH_CLIENT_ID`と`OAUTH_CLIENT_SECRET`は[SUZURI Developer ページ](https://suzuri.jp/developer/apps)のアプリケーションページから登録できます。
`NEXTAUTH_URL`はそのままで、`NEXTAUTH_SECRET`はランダムな文字列を設定してください。

`yarn`を利用してパッケージをインストールし、開発環境を立ち上げます。

```bash
yarn
yarn dev
```

[https://localhost:4000](https://localhost:4000)に開発環境が立ち上がります。

SUZURI の OAuth を利用するために HTTPS を有効にしています。証明書エラーが発生しますがそのままアクセスしてください。

現在、以下の３つのサンプルページがあります。

- https://localhost:4000/secret -　ログイン必須のページ
- https://localhost:4000/try-api - API 取得の例
- https://localhost:4000/create - Material を登録する例

## 関連ドキュメント

- [Next.js Documentation](https://nextjs.org/docs) - Next.js のドキュメント
- [Learn Next.js](https://nextjs.org/learn) - Next.js を学ぶ
- [NextAuth.js](https://next-auth.js.org/) - NextAuth.js のドキュメント
- [SWE](https://swr.vercel.app/ja) - API からの情報取得に使っている SWR のドキュメント

## Deploy on Vercel

GitHub などのリポジトリ経由で Vercel に簡単にデプロイすることができます。
その他へデプロイする場合は NextAuth.js が`pages/api`を使うことが必須なので SSG で静的ファイルだけではなく、API Routes が使える環境にデプロイしてください。

[Next.js deployment documentation](https://nextjs.org/docs/deployment)
