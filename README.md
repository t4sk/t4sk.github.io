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

GitHub Pages serves `dist/` from the `main` branch root, so build and commit
the output:

```sh
npm run build
git add dist
git commit -m "build"
git push
```
