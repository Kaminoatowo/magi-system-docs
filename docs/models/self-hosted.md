# Soluzioni self-hosted

Con **OPENAI-COMPAT** puoi collegare modelli che giri tu, in locale, tramite i principali runner che espongono un'API compatibile con il protocollo OpenAI.

## Come funziona in generale

Ogni runner self-hosted espone un endpoint che accetta chiamate **`POST /v1/chat/completions`**. Nel pannello **⚙ CONFIG → OPENAI-COMPAT** imposti:

| Campo | Valore per self-hosted |
|-------|------------------------|
| **BASE URL** | `http://localhost:PORT/v1` (o l'IP della macchina che ospita il modello) |
| **MODELLO** | il nome del modello caricato (es. `llama3.1`, `qwen2.5`) |
| **API KEY** | **lasciala vuota** — i runner locali ignorano l'autenticazione |

Con la chiave vuota, il sistema invia comunque una richiesta valida (header auth con un valore segnaposto) e il runner locale risponde normalmente.

## Ollama (consigliato per iniziare)

Il modo più semplice per provare un modello locale.

1. Installa Ollama da [ollama.com](https://ollama.com) (funziona su macOS, Linux e Windows).
2. Scarica un modello, ad esempio:
   ```bash
   ollama pull llama3.1
   ```
3. Avvia il server (su macOS è già in esecuzione; su Linux):
   ```bash
   ollama serve
   ```
4. Nel MAGI System, ⚙ **CONFIG → OPENAI-COMPAT**:
   - **BASE URL**: `http://localhost:11434/v1`
   - **MODELLO**: `llama3.1`
   - **API KEY**: *(vuota)*
5. **CONFIRM** e fai una domanda in chat. Se funziona, vedrai la delibera come con i provider cloud.

## llama.cpp (server)

Se preferisci eseguire un modello con llama.cpp:

```bash
# avvia il server con un GGUF già scaricato
llama-server -m model.gguf --host 0.0.0.0 --port 8080
```

Poi imposta **BASE URL** `http://localhost:8080/v1` e come **MODELLO** il nome del file GGUF.

## vLLM / LM Studio

- **vLLM** (per GPU datacenter):
  ```bash
  vllm serve meta-llama/Llama-3.1-8B-Instruct \
    --api-key dummy --port 8000
  ```
  → **BASE URL**: `http://localhost:8000/v1`
- **LM Studio** (interfaccia grafica per desktop):
  scarica un modello, avvia il server locale → **BASE URL**: `http://localhost:1234/v1`

## Accedere da un altro dispositivo

Se il browser è su un'altra macchina rispetto a quella che esegue il modello, `localhost` non basta. Usa l'**IP di rete** della macchina del modello e assicurati che:

- il runner ascolti su `0.0.0.0` (non solo `127.0.0.1`);
- sia raggiungibile sulla rete (es. `http://192.168.x.x:11434/v1`);
- il runner abbia il **CORS** abilitato, altrimenti il browser blocca la richiesta.

La maggior parte dei runner (Ollama, vLLM, LM Studio) espone un'opzione CORS; nei casi problematici un piccolo proxy gateway risolve la questione.

::: tip Vantaggi dell'approccio self-hosted
- **Privacy**: i dati non lasciano la tua macchina.
- **Niente costi per query**: paghi solo energia e hardware.
- **Bypassa il tier gratuito** del sito, dato che usi la tua infrastruttura.
:::

::: warning Limiti da conoscere
I modelli locali piccoli (3–8B) possono produrre verdetti meno analitici o, a volte, JSON malformati rispetto ai modelli cloud più grandi. Per MASSE dannose usa un modello locale sufficientemente grande, oppure mantieni l'opzione cloud come riferimento.
:::