# MAGI System — Docs

Documentazione ufficiale del [MAGI System](https://github.com/Kaminoatowo/magi-system), pubblicata con [VitePress](https://vitepress.dev) su GitHub Pages.

## Sviluppo locale

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # output in docs/.vitepress/dist
```

## Deploy

Un push su `main` attiva il workflow `.github/workflows/deploy.yml`, che compila il sito e lo pubblica su **GitHub Pages**. Per attivar la pubblicazione da zero: **Settings → Pages → Source: GitHub Actions**.