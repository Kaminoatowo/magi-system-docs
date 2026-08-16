# Ottenere una API key

Questa guida spiega come procurarti una chiave per i provider cloud e inserirla nel MAGI System.

## Anthropic (Claude)

1. Vai su [console.anthropic.com](https://console.anthropic.com) e accedi (crea un account se serve).
2. **Billing** → verifica che sia impostato un metodo di pagamento (il servizio è a consumo).
3. **API Keys** → **Create Key**, dagli un nome (es. `magi`), copia la stringa che comincia con `sk-ant-...`.
4. Nel MAGI System: ⚙ **CONFIG** → seleziona **ANTHROPIC** → incolla la chiave in **ANTHROPIC_API_KEY** → **CONFIRM**.

::: warning Sicurezza della chiave
La chiave inserita viene salvata **nel browser** e inviata al server solo durante la richiesta, poi usata per chiamare il provider. Quando puoi, evita di condividerla. Per un'installazione pubblica, è più pulito impostare la chiave come **variabile d'ambiente** sul server (v. sotto).
:::

## OpenAI (GPT)

1. Vai su [platform.openai.com](https://platform.openai.com) e accedi.
2. **Settings → Billing** → carica del credito.
3. **API keys** → **Create new secret key**, copia la stringa `sk-...` (non la vedrai più).
4. Nel MAGI System: ⚙ **CONFIG** → **OPENAI** → incolla la chiave in **OPENAI_API_KEY** → **CONFIRM**.

## Inserire la chiave sul server (variabile d'ambiente)

Se ospiti tu l'applicazione (es. su Vercel), puoi impostare `ANTHROPIC_API_KEY` e/o `OPENAI_API_KEY` come variabili d'ambiente. In quel caso **non devi** inserire alcuna chiave nel pannello: quando il campo è vuoto il sistema usa automaticamente la variabile del server. Questo abilita anche il **tier gratuito** del sito.

## Domande frequenti

**Le API key scadono?**
Anthropic e OpenAI emettono chiavi permanenti; puoi revocarle e rigenerarle in qualsiasi momento dalla console.

**Posso usare una sola chiave per entrambi?**
No, i due provider sono separati. Se alterni tra loro, inserisci entrambe le chiavi e scegli il provider attivo nel pannello.

**Preferisco provare gratis molti modelli.**
Allora valuta **OpenRouter**, che con una singola chiave dà accesso a decine di modelli (inclusi piccoli modelli gratuiti). Spiegato in [Altri provider OpenAI-compatible](/models/other-providers).