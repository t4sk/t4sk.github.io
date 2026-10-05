# t4sk.github.io

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Deploy

`npm run build` outputs to `docs/`, which is committed and published by GitHub
Pages.

Set the publish source once in **Settings → Pages → Build and
deployment → Source: Deploy from a branch, `main` / `/docs`**.

```sh
npm run build
git add docs
git commit -m "build"
git push
```
