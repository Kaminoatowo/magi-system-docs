# Scegliere un modello

Il MAGI System non è legato a nessun provider particolare: puoi collegare **qualunque** modello compatibile. Ci sono tre strade, ciascuna con i propri trade-off.

## Le tre strade

| Approccio | Cosa serve | Costo | Privacy | Difficoltà |
|-----------|-----------|-------|---------|-----------|
| **API key cloud** (Anthropic / OpenAI) | Una chiave API | A pagamento (pay-per-use) | I dati vanno al provider | ★☆☆ |
| **Self-hosted** (Ollama, llama.cpp, vLLM, LM Studio) | La tua GPU/hardware | Gratuito (solo energia) | I dati restano in locale | ★★★ |
| **Altri provider OpenAI-compatible** (OpenRouter, gateway…) | Una chiave del provider | Variabile | Dipende dal provider | ★★☆ |

Tutte e tre si configurano dal pannello **⚙ CONFIG** dell'app.

## Come scegliere

> **Voglio la massima semplicità e qualità delle risposte.**
> → Ottieni una **API key** da Anthropic o OpenAI e incollala nelle impostazioni. Zero configurazioni extra.

> **Voglio dati privati, tante query o nessun costo per messaggio.**
> → Monta un **modello self-hosted** (Ollama è il più semplice per iniziare) e punta il sito al suo endpoint locale.

> **Voglio un solo punto di accesso a tanti modelli, con un'unica chiave.**
> → Usa un **provider compatibile** come **OpenRouter**, che espone centinaia di modelli dietro una singola chiave API.

## Cosa viene configurato nel pannello

Quando selezioni il provider nel ⚙ CONFIG, in pratica imposti:

- **ANTHROPIC** → solo la chiave `sk-ant-...` (variante Claude).
- **OPENAI** → solo la chiave `sk-...` (variante GPT).
- **OPENAI-COMPAT** → una **Base URL** (obbligatoria), un **nome modello** e una **chiave opzionale**. Questa è la via universale: viene usata per self-hosted E per gli altri provider compatibili.

::: tip Il modello di default
Se non specifichi il nome del modello, il sistema usa un default per il provider scelto. Per i provider cloud il default è modificabile solo via variabile d'ambiente sul server; per l'OPENAI-COMPAT lo scegli tu direttamente nel pannello.
:::

Prosegui con la guida che ti riguarda:

- [Ottenere una API key](/models/get-api-key)
- [Soluzioni self-hosted](/models/self-hosted)
- [Altri provider OpenAI-compatible](/models/other-providers)