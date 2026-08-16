import { defineConfig } from "vitepress";

export default defineConfig({
  title: "MAGI System",
  description: "Documentazione ufficiale del MAGI System",
  lang: "it-IT",
  base: "/magi-system-docs/",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Guida", link: "/guide/what-is-magi" },
      { text: "Modelli", link: "/models/overview" },
      { text: "App", link: "https://github.com/Kaminoatowo/magi-system" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guida all'uso",
          collapsed: false,
          items: [
            { text: "Cos'è il MAGI System", link: "/guide/what-is-magi" },
            { text: "Usare il sito", link: "/guide/using-the-site" },
            { text: "Triplette e Market", link: "/guide/triplets" },
            { text: "Leggere i verdetti", link: "/guide/reading-verdicts" },
          ],
        },
      ],
      "/models/": [
        {
          text: "Scegliere un modello",
          collapsed: false,
          items: [
            { text: "Panoramica", link: "/models/overview" },
            { text: "Ottenere una API key", link: "/models/get-api-key" },
            { text: "Soluzioni self-hosted", link: "/models/self-hosted" },
            { text: "Altri provider (OpenAI-compatible)", link: "/models/other-providers" },
          ],
        },
      ],
    },
    footer: {
      message: "MAGI System — NERV Central Dogma",
      copyright: "Documentazione open source su GitHub",
    },
  },
});