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

## Quiz 

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

Yes 🙌 hieronder staat jouw tekst netjes in een Markdown codeblok, schoon geformatteerd en iets vloeiender geformuleerd (maar nog steeds student-proof).

Je kunt dit direct plakken in je README.

# Weekly Nerd – Kilian Valkhof (Polyplane)

## Wie was er?

Tijdens deze Weekly Nerd kwam Kilian Valkhof spreken, de maker van Polyplane.

Polyplane is een tool waarmee je je website tegelijkertijd kunt bekijken op meerdere schermformaten (desktop, tablet, mobiel).  
Dit is vooral handig om responsive gedrag en media queries te testen.

---

## Wat is mij bijgebleven?

Wat mij vooral bijbleef, is dat veel dingen die wij snel met JavaScript oplossen, eigenlijk al mogelijk zijn met HTML en CSS.

Hij liet bijvoorbeeld het `<dialog>` element zien als eenvoudige oplossing voor een pop-up.  
Dat was voor mij een belangrijk inzicht.

Ik merk dat ik snel denk:  
“Dit moet met JavaScript.”

Maar soms kan het simpeler.

---

## Wat heb ik hiervan geleerd?

- Het web heeft al veel ingebouwde functionaliteit.
- Minder JavaScript kan je code overzichtelijker maken.
- Simpele oplossingen zijn vaak stabieler.
- Eerst kijken wat HTML en CSS kunnen voordat je naar JS grijpt.

---

## Hoe heb ik dit toegepast?

In mijn eigen OnePager heb ik het `<dialog>` element gebruikt voor een pop-up.

De verdeling daarbij was:

- HTML → structuur  
- CSS → styling  
- JavaScript → timing (automatisch openen via een timer)

Hierdoor bleef de basis semantisch correct en gebruikte ik JavaScript alleen waar het echt nodig was.

Ik heb geprobeerd bewuster na te denken over wanneer JavaScript écht een meerwaarde heeft, en wanneer HTM
---

# Algemene Reflectie

Dit project was voor mij meer dan alleen “een website maken”.  
Het was een week waarin ik opnieuw moest wennen aan HTML, CSS en vooral JavaScript.

Wat ik merkte tijdens dit proces:

- Ik begin enthousiast en wil veel tegelijk.
- Ik onderschat hoe lang technische onderdelen kosten.
- Ik leer het meest wanneer iets eerst níet werkt.

Vooral bij de JavaScript-interacties merkte ik dat mijn kennis nog niet altijd diep genoeg is om alles direct zelf te bouwen. Soms moest ik echt terug naar de basis: wat doet een event listener precies? Wat gebeurt er als je een element verplaatst in de DOM? Waarom werkt iets niet zoals ik verwacht?

De custom cursor is daar een goed voorbeeld van.  
Daar heb ik bewust hulp bij gebruikt, omdat ik in korte tijd wilde begrijpen hoe zo’n animatie technisch in elkaar zit. Eerst voelde dat als “valsspelen”, maar eigenlijk was het een leerstrategie: ik heb de code daarna stap voor stap uitgeplozen tot ik begreep wat elke regel deed.

Wat ik vooral heb geleerd deze week:

- Structuur is belangrijker dan snelheid.
- Stabiliteit is belangrijker dan zoveel mogelijk features.
- Debuggen is geen teken dat je iets niet kan — het *is* het leerproces.
- Het web heeft vaak al oplossingen die simpeler zijn dan je denkt.

Ik merk dat ik steeds minder denk in:  
“Hoe krijg ik dit werkend?”

En steeds meer in:  
“Waarom werkt dit zo?”

Dat verschil voelt klein, maar is voor mij een grote stap.

Tot slot zie ik dit project echt als een startpunt.  
Niet alles is perfect, maar ik begrijp veel beter hoe interactie, data en structuur samenwerken. Dat maakt dit een waardevol leermoment waar ik in de komende weken verder op kan bouwen.


---


# Bronnen

## JavaScript – Basis & Interactie

MDN – Fetch API  
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API  


MDN – Async / Await  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function  

MDN – requestAnimationFrame  
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame  

MDN – Pointer Events  
https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events  

JavaScript.info – DOM manipulation  
https://javascript.info/dom-nodes  

CSS-Tricks – requestAnimationFrame uitleg  
https://css-tricks.com/using-requestanimationframe/  

Traversy Media – JavaScript DOM Crash Course  
https://www.youtube.com/watch?v=0ik6X4DJKCc  

Web Dev Simplified – JavaScript DOM Manipulation  
https://www.youtube.com/watch?v=y17RuWkWdn8  

---

## DOM & Interactie

MDN – querySelector  
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector  

MDN – classList  
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList  

MDN – dataset property  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset  

FreeCodeCamp – DOM manipulation basics  
https://www.freecodecamp.org/news/javascript-dom-manipulation/  

---

## CSS & Animatie

MDN – CSS Custom Properties  
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties  

MDN – transform  
https://developer.mozilla.org/en-US/docs/Web/CSS/transform  

MDN – transition  
https://developer.mozilla.org/en-US/docs/Web/CSS/transition  

CSS-Tricks – Guide to CSS Animations  
https://css-tricks.com/almanac/properties/a/animation/  

A Complete Guide to Flexbox – CSS-Tricks  
https://css-tricks.com/snippets/css/a-guide-to-flexbox/  

CSS-Tricks / Creative Coding uitleg (requestAnimationFrame concept)  
https://www.youtube.com/watch?v=Yl9f1eYzVY8  

The Net Ninja – JavaScript Animations  
https://www.youtube.com/watch?v=gm1QtePAYTM  

Kevin Powell – CSS Animations for Beginners  
https://www.youtube.com/watch?v=YszONjKpgg4  

Kevin Powell – CSS Custom Properties  
https://www.youtube.com/watch?v=PHO6TBq_auI  

---

### Drag & Pointer Events

Web Dev Simplified – Drag and Drop JavaScript  
https://www.youtube.com/watch?v=jfYWwQrtzzY  

The Net Ninja – Drag and Drop Tutorial  
https://www.youtube.com/watch?v=C22hQKE_32c  

---

## Toegankelijkheid

MDN – ARIA live regions  
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions  

Web.dev – Accessibility basics  
https://web.dev/accessibility/  

---

## API’s & Data

WorldTime API  
https://worldtimeapi.org/  

Open-Meteo API  
https://open-meteo.com/  

FDND Directus API (schoolomgeving)  

Web Dev Simplified – Fetch API Tutorial  
https://www.youtube.com/watch?v=Oive66jrwBs  

The Net Ninja – JavaScript Async/Await Tutorial  
https://www.youtube.com/watch?v=V_Kr9OSfDeU  


---

## Inspiratie & Tools

Polyplane – Kilian Valkhof  
https://polyplane.app/  

CodePen (interactie inspiratie)  
https://codepen.io/  


