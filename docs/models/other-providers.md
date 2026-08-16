# Altri provider (OpenAI-compatible)

Molti provider e servizi di "gateway" espongono la stessa API di chat-completions di OpenAI. Puoi collegarne **qualsiasi** usando la modalità **OPENAI-COMPAT**: ti basta conoscerne la **Base URL** e (di solito) una **chiave API**.

## La regola universale

Nel pannello **⚙ CONFIG → OPENAI-COMPAT** imposti:

- **BASE URL** — l'endpoint `/v1` del provider;
- **MODELLO** — uno dei nomi modello esposti dal provider;
- **API KEY** — quella del provider (qui è **richiesta**, a differenza dei server locali).

L'app invia la richiesta a `BASE_URL/chat/completions` esattamente come farebbe con OpenAI. Se il provider segue il protocollo, funziona.

## OpenRouter (un'unica chiave per centinaia di modelli)

OpenRouter è forse la scelta migliore per "provare tanti modelli" con una sola chiave.

1. Registrati su [openrouter.ai](https://openrouter.ai) e crea una **API key** (sezione **Keys**).
2. Scegli un modello dal catalogo e copiane il **nome completo** (es. `openai/gpt-4o`, `anthropic/claude-3.5-sonnet`, `meta-llama/llama-3.1-70b-instruct`, oppure uno dei modelli **gratuiti** `:free`).
3. Nel MAGI System, ⚙ **CONFIG → OPENAI-COMPAT**:
   - **BASE URL**: `https://openrouter.ai/api/v1`
   - **MODELLO**: es. `meta-llama/llama-3.1-8b-instruct`
   - **API KEY**: la tua chiave OpenRouter
4. **CONFIRM** e prova.

::: tip Modelli gratuiti su OpenRouter
Alcuni modelli OpenRouter sono taggati `:free` (es. `meta-llama/llama-3.1-8b-instruct:free`) e ti permettono di provare l'app **a costo zero**, con i limiti previsti dal servizio.
:::

## Altri provider compatibili

Il pattern è sempre lo stesso: individua la **Base URL** `/v1` e i **nomi modello** dalla documentazione del provider, poi compila i tre campi.

Esempi noti di servizi con API OpenAI-compatible:

| Servizio | Base URL tipica | Note |
|----------|-----------------|------|
| **OpenRouter** | `https://openrouter.ai/api/v1` | Aggregatore di molti modelli |
| **Groq** | `https://api.groq.com/openai/v1` | Inferenza molto veloce (Llama, Mixtral) |
| **Together AI** | `https://api.together.xyz/v1` | Modelli open + proprietari |
| **DeepInfra** | `https://api.deepinfra.com/v1/openai` | Vari modelli open |
| **Mistral** | `https://api.mistral.ai/v1` | Modelli proprietari Mistral |

::: tip Base URL già "conta" il `/v1`
Non serve aggiungere `/chat/completions`: l'app lo appende da sola. Assicurati solo che la Base URL termini con `/v1` come indicato dal provider.
:::

## Risoluzione dei problemi

- **Errore 404**: Base URL sbagliata o manca `/v1`. Controlla nella documentazione del provider.
- **Errore 401**: chiave API errata, scaduta o non valida per quel modello.
- **Errore 400 / modello non trovato**: il nome del modello non corrisponde a quelli esposti; verifica l'elenco del provider.
- **Risposta inattesa o campo JSON mancante**: alcuni provider molto piccoli non rispettano pienamente il protocollo; prova un provider noto (OpenRouter, Groq) come riferimento.