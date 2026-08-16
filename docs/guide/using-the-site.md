# Usare il sito

Il sito è un'app web che gira nel browser. Apri l'app all'indirizzo **https://magi-system-two.vercel.app** (o usa il link **App ↗** nella barra di navigazione) e prosegui con questa guida.

## La barra di navigazione

In alto trovi:

- **CHAT** — la pagina principale dove parli con il MAGI.
- **MARKET** — scegli quale «configurazione» (tripletta) usare.
- **ARCHIVE** — le sessioni passate.
- A destra: il toggle **◎ MODERN/NERV** per il tema e il toggle **lingua** per IT/EN.

## Fare una domanda (CHAT)

1. Digita la tua domanda nella casella in fondo e premi **Send**.
2. Le tre unità della tripletta attiva deliberano **in parallelo** — vedi i pannelli aggiornarsi in tempo reale.
3. In pochi secondi arriva la risposta completa con il verdetto del **moderatore**.

Ogni messaggio del MAGI è un **report strutturato**: sintesi e verdetto di ciascuna unità, più lo stato finale del consenso.

::: tip Comando /test
Digita `/test` per vedere una deliberazione simulata senza consumare modelli — utile per provare l'interfaccia.
:::

## Scegliere la configurazione (MARKET)

Dal Market puoi attivare una delle triplette preimpostate. Clicca **ACTIVATE** su quella che preferisci: tornerai automaticamente alla chat con la nuova configurazione. Vedi [Triplette e Market](/guide/triplets) per l'elenco completo.

## Configurazione ⚙

Il pulsante **⚙ CONFIG** nella chat apre il pannello delle impostazioni:

1. **Provider LLM** — seleziona ANTHROPIC, OPENAI oppure **OPENAI-COMPAT** per un endpoint custom.
2. **API keys** — opzionali: se vuote, il sito usa le variabili d'ambiente del server.
3. **CUSTOM ENDPOINT** — quando scegli OPENAI-COMPAT, imposta Base URL, nome modello e (facoltativamente) API key. Tutto spiegato in [Scegliere un modello](/models/overview).

Il riquadro **CURRENT STATUS** in fondo mostra provider, modello e stato della chiave in uso.

## Modalità gratuita

Se **nessuna API key è configurata**, il sito usa le credenziali del server su un **tier gratuito limitato**. Quando lo esaurisci, ti viene chiesto di aggiungere una chiave. Configurando un **endpoint custom self-hosted** aggiri del tutto questo limite. Dettagli in [Scegliere un modello](/models/overview).

## I temi

- **MODERN** — tre pannelli separati, uno per ogni unità, con la chat sotto.
- **NERV** — la visualizzazione classica «stile Evangelion» con la deliberazione in un unico pannello.

## Sessioni e Archivio

Le tue conversazioni vengono salvate **localmente nel browser** (non sul server). Dall'**ARCHIVE** puoi riaprire una sessione passata con **Reopen** e continuarla da dove era finita. Le ultime 50 sessioni vengono conservate.