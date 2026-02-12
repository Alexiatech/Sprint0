# Sprint 0 – OnePager

## Inhoudsopgave

- [OnePager](#onepager)
- [Proces – Dag 1 t/m 6](#proces--dag-1-tm-6)
- [JavaScript & Interactie](#javascript--interactie)
- [Weekly Nerd – Kilian Valkhof](#weekly-nerd--kilian-valkhof)
- [Algemene Reflectie](#algemene-reflectie)
- [Bronnen](#bronnen)

---

# OnePager

Dit project is mijn persoonlijke one-page website.  
De focus ligt op interactie, micro-animations en experimenteren met wat het web technisch kan.

Ik wilde niet alleen iets maken dat er goed uitziet, maar vooral begrijpen wat ik bouw en waarom het werkt.

Dit project is gemaakt in ongeveer één week tijd. Daardoor moest ik keuzes maken, prioriteiten stellen en soms features schrappen om het stabiel te houden.

---

# Proces – Dag 1 t/m 6

## Dag 1 – Structuur & Basis

Ik begon met het opzetten van een semantische HTML-structuur.  
Hierbij heb ik bewust gebruik gemaakt van:

- `<header>`
- `<main>`
- `<section>`
- `<article>`
- `<form>`

Daarnaast heb ik gewerkt met design tokens in `:root` voor kleurgebruik (dark/light mode via `prefers-color-scheme`).

**Wat ik leerde:**  
Een sterke HTML-basis maakt CSS en JavaScript logischer en overzichtelijker.

---

## Dag 2 – Interactie & Micro-animations

Op deze dag wilde ik meer beleving toevoegen.

Ik heb:
- Hover-effecten verfijnd
- Kleine animaties toegevoegd
- Transitions verbeterd
- Geëxperimenteerd met easing

Hier merkte ik dat balans belangrijk is. Te veel animatie maakt een pagina onrustig.

---

## Dag 3 – Boeken & Quiz

Ik heb een boeken-sectie gebouwd met hover-interactie.  
Wanneer je over een cover hovert, verschijnt de samenvatting in een vaste `.books__summary`.

Daarnaast heb ik een quiz gemaakt met radio inputs en directe feedback via JavaScript.

**Technisch gewerkt met:**
- `querySelector`
- `addEventListener`
- `dataset`
- `classList`
- `aria-live`

Hier merkte ik dat JavaScript snel complexer wordt dan je verwacht.

---

## Dag 4 – Draggable Goals

Mijn leerdoelen wilde ik visueel en interactief maken.

Ik heb:
- `.goal[data-drag]` elementen gemaakt
- Pointer events gebruikt (werkt voor muis én touch)
- `getBoundingClientRect()` gebruikt voor positie-berekening
- Een clamp-functie gemaakt zodat kaarten binnen de container blijven

Hier begon ik beter te begrijpen hoe positionering relatief werkt binnen een parent container.

---

## Dag 5 – API’s & Header

Ik heb geëxperimenteerd met meerdere API’s:

- Weather API  
- Quote API  
- WorldTime API  

Niet alles werkte stabiel binnen de tijd die ik had. Daarom heb ik bewust gekozen om sommige onderdelen te verwijderen.

Wel heb ik:
- Een klok gebouwd met fetch + fallback
- Een random movie API toegevoegd (school API)
- Mijn naam dynamisch opgehaald via een endpoint

Hier leerde ik werken met:
- `fetch`
- `async/await`
- JSON parsing
- Error handling (`try/catch`)

---

## Dag 6 – Fine-tuning

De laatste dag stond in het teken van opschonen.

Ik heb:
- Niet-stabiele features verwijderd
- Code opgeschoond
- Interactie consistenter gemaakt
- Teksten herschreven

Belangrijk inzicht:  
Niet alles wat technisch kan, moet je houden.

---

# JavaScript & Interactie

In mijn one-page project gebruik ik JavaScript om interactieve onderdelen aan te sturen.  
Elke feature is apart opgebouwd (IIFE of `DOMContentLoaded`) zodat code niet globaal lekt.

---

## Cursor trail (3 lagen)

Drie bolletjes volgen de muis met verschillende snelheden.

Technisch:
- `.cursor` selecteren
- `mousemove` listener
- Positie opslaan
- `requestAnimationFrame()` gebruiken
- Interpolatie toepassen via snelheidsarray

```js
pos.x += (mouseX - pos.x) * speeds[i];
pos.y += (mouseY - pos.y) * speeds[i];
```

Met `matchMedia("(hover: none)")` zet ik dit uit op touch devices.

**Transparantie:**  
De basisstructuur van deze cursor kwam van ChatGPT.  
Ik heb deze gebruikt omdat ik in korte tijd wilde begrijpen hoe een trailing-animatie werkt. Daarna heb ik de code aangepast en begrijp ik nu hoe interpolatie en `requestAnimationFrame()` samenwerken.

---

## Draggable goals

Interactieve kaarten binnen `#goalsStage`.

Gebruikt:
- `pointerdown`, `pointermove`, `pointerup`
- `getBoundingClientRect()`
- Clamp-logica

Dit zorgt ervoor dat kaarten binnen hun container blijven.

---

## Polaroid stack loop

Elke paar seconden wordt de bovenste foto achteraan geplaatst.

```js
stack.appendChild(first);
```

Gecombineerd met opacity voor een zachtere overgang.

---

## Quiz – 2 truths and a lie

- `#quizForm`
- `data-correct`
- `change` event
- `aria-live` feedback

```js
const isCorrect = input.dataset.correct === "true";
```

Dit zorgt voor directe en toegankelijke feedback.

---

## Random movie API

Fetch naar school endpoint.  
Random index genereren en DOM updaten.

```js
const randomIndex = Math.floor(Math.random() * allStudents.length);
```

Hier leerde ik beter omgaan met async data.

---

# Weekly Nerd – Kilian Valkhof

Tijdens deze Weekly Nerd leerde ik dat veel dingen die wij snel met JavaScript oplossen, al mogelijk zijn met HTML en CSS.

Bijvoorbeeld het `<dialog>` element voor modals.

Dit inzicht heb ik meegenomen in mijn eigen project.

---

# Algemene Reflectie

Wat ik merk in dit project:

- Ik experimenteer graag.
- Ik onderschat soms hoeveel tijd technische onderdelen kosten.
- Debuggen hoort erbij.
- Ik leer steeds meer denken in structuur.

Ik ben van “iets werkend krijgen” gegaan naar “begrijpen waarom het werkt”.

Voor een week werk ben ik trots op het resultaat.

---

# Bronnen

MDN – Fetch API  
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API  

MDN – requestAnimationFrame  
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame  

MDN – pointer-events  
https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events  

MDN – getBoundingClientRect  
https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect  

MDN – addEventListener  
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  

MDN – aria-live  
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions  
