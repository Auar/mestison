# SITO WEB MESTISON

Creare un sito web per il gruppo musicale mestisòn.
Il file del sito dovranno essere generati all'interno della cartella ./site/ e utilizza la struttura già presente dei file e aggiorna se necessario i file già presenti secondo le direttive espresse qui sotto.

# Stile del sito

## Atmosfera
Caldo, minimalista, elegante. Molto spazio vuoto, tipografia protagonista,
fotografie grandi e poche decorazioni. Deve evocare la musica afro-colombiana
(Caraibi, tamburi, terra, festa) attraverso colore e ritmo del layout,
non con motivi folcloristici o pattern etnici sovraccarichi.
Il gruppo si ispira alla musica afro caraibica e alla colombia, quindi il sito dovrà avere con colori caldi e riferiti ai colori della colombia in particolare della costa caraibica della colombia.
I generi vanno dalla Cumbia al Mapalè e alla musica africana, quindi il sito dovrà avere un'impostazione etnica e multiculturale.

Prendi spunto da questo sito web:
- https://quilombera-band.web.app/



## Colori
| Ruolo                  | Valore    | Note                          |
|------------------------|-----------|-------------------------------|
| Sfondo principale      | #FAF3E8   | crema caldo                   |
| Sfondo alternato       | #F1E4D0   | sabbia, per sezioni alterne   |
| Testo principale       | #2B1A12   | marrone cacao quasi nero      |
| Testo secondario       | #6B5646   |                               |
| Accento primario       | #C65D2E   | terracotta                    |
| Accento secondario     | #E0A526   | ocra/giallo miele, uso raro   |
| Accento freddo (opz.)  | #1F6F6B   | verde-turchese, solo dettagli |
| Top bar / bottom bar   | #2B1A12   | testo chiaro #FAF3E8          |

Regola: 60% crema/sabbia, 30% marrone scuro, 10% accenti. L'accento
terracotta solo per link, pulsanti e dettagli; l'ocra al massimo una volta per schermata.

## Tipografia
- Titoli: "Fraunces" (o "DM Serif Display"), serif, peso 600, titoli grandi
- Testo: "DM Sans" (o "Inter"), 17px, interlinea 1.7
- Font da Google Fonts, `font-display: swap`
- Titoli di sezione con lettere leggermente spaziate, in maiuscolo piccolo
  (es. "BIOGRAFIE") sopra al titolo principale

## Layout
- Larghezza massima contenuti: 1100px, centrati
- Top bar sticky, altezza 64px, logo/nome a sinistra, menu a destra
- Sotto la top bar: banner a tutta larghezza, altezza 60vh (max 500px),
  immagine con `object-fit: cover` e leggero velo scuro per leggibilità
- Contenuti: sezioni con padding verticale ampio (96px desktop, 56px mobile)
- Biografie: foto e testo affiancati (50/50), alternati sinistra/destra
- Bottom bar: sfondo scuro, testo piccolo centrato, link social
- Mobile: colonna unica sotto i 768px
- Il sito web dovrà essere responsive cioè predisposto sia per browser web che per cellulare e tablet.
- La parte centrale del sito saranno presenti i contenuti e poi dovrà esserci una bottom bar dove riportiamo il log a dx e © 2026 Mestison per la parte di copyright.
- Crea css/style.css usando i valori della sezione “Stile” di questo file e le variabili CSS indicate in ./requisiti/prompt/css/style.css 
- Stile minimalista e caldo, nessun CSS copiato da altri siti. 
- Verifica il contrasto del testo (almeno 4.5:1) e rendi il layout responsive.
 

## Componenti
- Link: terracotta, sottolineatura sottile al passaggio del mouse
- Pulsanti: pieni terracotta, testo crema, angoli 4px, nessuna ombra
- Immagini: angoli 6px, nessun bordo; foto con tonalità calda
- Separatori: linea sottile di 1px in colore #D9C7AE
- Transizioni: 200ms ease, solo su colore e opacità

## Da evitare
- Gradienti vistosi, ombre pesanti, glassmorphism
- Pattern etnici o clichè folcloristici come sfondo
- Più di due font, più di tre colori d'accento
- Animazioni ampie o parallax
- Testo chiaro su sfondo ocra (contrasto insufficiente)


# Logo del gruppo

- Il logo del gruppo è presente nel folder ./materiale/loghi/mestison-logo.jpg e deve essere riportato nelle varie pagine del sito.

Sezioni del sito:

* Storia
* Musician
* Galley
* Video
* Shop
* Contatti

## Struttura dei contenuti

Il sito è composto da sezioni. I dettagli di ogni sezione si trovano in:

    ./materiale/sez<ioni/<sezione>/<sezione>.md

Sezioni previste:

| Sezione      | File                                        |
|--------------|---------------------------------------------|
| storia       | ./materiale/sezioni/storia/storia.md        |
| musicisti    | ./materiale/sezioni/musicisti/musicisti.md  |
| gallery      | ./materiale/sezioni/gallery/gallery.md      |
| video        | ./materiale/sezioni/video/video.md          |
| shop         | ./materiale/sezioni/shop/shop.md            |
| contatti     | ./materiale/sezioni/contatti/contatti.md    |

Regole:
- Ogni sezione diventa una sottopagina del sito, con URL `/<sezione>/`.
- Il titolo del menu si ricava dal front matter `title` del file `.md`.
- Le immagini della sezione stanno nella stessa cartella (`./materiale/<sezione>/img/`).
- L'ordine delle voci di menu segue il campo `order` del front matter.


## HISTORY

Il contenuto descrittivo di questa pagina è presente nel file ./materiale/sezioni/storia/storia.md

## Musician

Questa sezione riporta le foto e una breve descrizione di ogni musicista
il materiale per ogni musicista è presente nel folder ./materiale/musicisti/[nome-musicista]/  al cui interno è presente la biografia del musicista e una foto.
La sezione dovra mostrare la foto e la biografia associata prednendo spunto dal contenuto del file 
I contenuti e le direttive su come strutturare la gallery sono presnti nel file ./materiale/sezioni/musicisti/musicisti.md  

## Gallery

La gallery contiene le immagini del gruppo e dei singoli componenti.
I contenuti sono presenti nel folder ./materiale/sezioni/gallery/img/ e vanno lette tutte le immagini presenti in questa folder e formattate e associata la descrizione se presente.
I contenuti e le direttive su come strutturare la gallery sono presnti nel file ./materiale/sezioni/gallery/gallery.md  