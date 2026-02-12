# Sprint0

## Inhoudsopgave

- [OnePager](#onepager)
  - [Code](#code)
    - [Header](#header)
    - [JavaScript](#javascript)
- [Dag 1 – Basis & Concept](#dag-1--basis--concept)
- [Dag 2 – Interactie & Micro-animations](#dag-2--interactie--micro-animations)
- [Dag 3 – Boeken & Quiz](#dag-3--boeken--quiz)
- [Dag 4 – Leerdoelen & Draggable Cards](#dag-4--leerdoelen--draggable-cards)
- [Dag 5 – Header & API’s](#dag-5--header--apis)
- [Dag 6 – Fine-tuning & Betere Keuzes](#dag-6--fine-tuning--betere-keuzes)
- [Weekly Nerd – Kilian Valkhof (Polyplane)](#weekly-nerd--kilian-valkhof-polyplane)
- [Algemene Reflectie Tot Nu Toe](#algemene-reflectie-tot-nu-toe)
- [Boeken-sectie (Hover + dynamische samenvatting)](#boeken-sectie-hover--dynamische-samenvatting)
- [Quiz-sectie (Radio inputs + feedback)](#quiz-sectie-radio-inputs--feedback)
- [API – Favoriete films van klasgenoten](#api--favoriete-films-van-klasgenoten)
- [Custom Cursor (interactie-detail)](#custom-cursor-interactie-detail)
- [Gebruik van hulpmiddelen](#gebruik-van-hulpmiddelen)
- [Belangrijk inzicht](#belangrijk-inzicht)

# OnePager 

Dit project is mijn persoonlijke OnePager.  
De focus ligt op interactie, micro-animations en experimenteren met wat het web technisch kan.

Ik wilde niet alleen een mooie pagina maken, maar vooral begrijpen wat ik bouw en waarom ik bepaalde keuzes maak.

---

# Dag 1 – Basis & Concept

## Waar gaat deze site over?

Deze website is mijn persoonlijke onepager.  
De focus ligt op **interactie, micro-animations en een rustige dark-mode uitstraling**.

Ik experimenteer met subtiele details zoals:
- Een custom cursor
- Hover-effecten
- Bewegende elementen
- Kleine interactieve momenten

Ik wilde dat de site niet alleen visueel klopt, maar ook “aanvoelt”.

---

## Wat heb ik gedaan?

- De basisstructuur opgezet met semantische HTML
- Een dark-mode design gemaakt met vaste design tokens (kleuren in `:root`)
- Basis layout en sections opgebouwd
- Eerste hover-interacties toegevoegd

Ik heb bewust gekozen om structuur eerst goed neer te zetten voordat ik veel styling toevoegde.

---

## Wat heb ik geleerd?

Dat een sterke HTML-structuur echt de basis is.  
Als je die goed opzet, wordt CSS later veel logischer.

---

# Dag 2 – Interactie & Micro-animations

## Focus

Meer beweging en karakter toevoegen aan mijn pagina.

---

## Wat heb ik gedaan?

- Custom cursor gemaakt met meerdere lagen
- Hover-effecten verfijnd
- Kleine animaties toegevoegd met easing
- Overgangen vloeiender gemaakt

Ik wilde dat mijn site niet “statisch” aanvoelt.

---

## Wat heb ik geleerd?

Dat micro-animations veel invloed hebben op de beleving.  
Maar ook dat je moet oppassen dat het niet te druk wordt.

Hier begon ik meer te begrijpen hoe belangrijk balans is.

---

# Dag 3 – Boeken & Quiz

## Focus

Interactie verbeteren in mijn boeken-sectie en experimenteren met een quiz.

---

## Wat heb ik gedaan?

- Hover-effect toegevoegd aan mijn boeken
- Een summary laten verschijnen boven het boek bij hover
- Geëxperimenteerd met positionering en z-index
- Een quiz toegevoegd (duurde veel langer dan verwacht)

Voor de quiz heb ik online inspiratie opgezocht en stukjes code bestudeerd.  
Daarna heb ik die herschreven zodat het past binnen mijn eigen structuur.

Ik heb dus niet zomaar gekopieerd, maar geprobeerd echt te begrijpen wat er gebeurde.

---

## Wat heb ik geleerd?

- Interactie lijkt simpel, maar is vaak technisch precies werk.
- JavaScript wordt snel complex.
- “Even iets toevoegen” bestaat eigenlijk niet.

Ik had momenten van frustratie, maar ook flow wanneer iets eindelijk werkte.

---

# Dag 4 – Leerdoelen & Draggable Cards

## Focus

Mijn leerdoelen visueel en interactief maken.

---

## Inspiratie

Ik heb inspiratie gehaald van een andere front-end student.  
Zij had drie blokken die je kon verplaatsen.

Dat idee heb ik vertaald naar mijn eigen stijl.

---

## Wat heb ik gedaan?

- Drie leerdoelen-blokken gemaakt
- Interactief gemaakt (verplaatsbaar)
- Grenzen ingesteld zodat ze binnen de container blijven
- Geëxperimenteerd met positionering

Hier begon ik beter te begrijpen hoe elementen zich gedragen binnen een parent container.

---

## Wat heb ik geleerd?

- Positionering is relatief.
- UX is belangrijk: wat mag de gebruiker wel en niet doen?
- Interactie moet gecontroleerd blijven.

Als ik het opnieuw zou doen, zou ik eerst schetsen hoe de interactie moet werken voordat ik begin met coderen.

---

# Dag 5 – Header & API’s

## Focus

Mijn header dynamischer maken met API’s.

---

## Wat heb ik geprobeerd?

- Weather API
- Random Quote API
- Een klok (zonder seconden)

Ik merkte dat API’s implementeren veel meer tijd kost dan ik verwachtte.

Je moet rekening houden met:
- Fetch
- Async/await
- JSON
- Error handling
- Structuur van data

---

## Wat ging mis?

De Quote API gaf foutmeldingen.  
De Weather API werkte deels, maar niet zoals ik het visueel wilde.

Uiteindelijk heb ik ervoor gekozen om deze onderdelen te verwijderen, omdat ze niet stabiel genoeg waren binnen de tijd die ik had.

Dat vond ik lastig, maar het was een bewuste keuze.

---

# Dag 6 – Fine-tuning & Betere Keuzes

Vandaag heb ik mijn pagina gefinetuned.

Ik heb:

- De niet-stabiele API’s verwijderd
- Mijn site meer naar het Nederlands gebracht
- Een sectie toegevoegd met favoriete films van klasgenoten (via school API)
- Mijn naam in de header dynamisch gemaakt via een persoonlijke API

In plaats van statische tekst fetch ik nu mijn naam uit een externe bron.

Dat vond ik persoonlijker en sterker dan random quotes.

---

## Belangrijk inzicht

Niet alles wat technisch kan, moet je houden.

Soms is minder beter.  
En een goed werkend simpel idee is sterker dan een half werkende complexe feature.

---

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
- Eerst kijken wat HTML en CSS kunnen.

---

## Hoe heb ik dit toegepast?

In mijn eigen OnePager heb ik het `<dialog>` element gebruikt voor een pop-up.

- HTML → structuur
- CSS → styling
- JavaScript → timing (automatisch openen via timer)

Ik heb geprobeerd bewuster na te denken over wanneer ik JavaScript écht nodig heb.

---

# Algemene Reflectie Tot Nu Toe

Wat ik merk in dit project:

- Ik experimenteer graag.
- Ik probeer veel nieuwe dingen.
- Ik onderschat soms hoeveel tijd technische onderdelen kosten.
- Debuggen hoort er gewoon bij.

Maar ik merk ook dat ik steeds beter begrijp hoe het web werkt.

Niet alleen hoe iets eruitziet, maar:
- Hoe elementen zich gedragen
- Hoe data wordt opgehaald
- Hoe interactie technisch wordt aangestuurd

Dit project voelt niet alleen als “een website maken”,  
maar echt als leren denken als developer.

## Main – Belangrijkste onderdelen

In de main van mijn OnePager heb ik meerdere interactieve secties gebouwd.  
Hieronder licht ik kort de belangrijkste onderdelen toe.

---

### 📚 Boeken-sectie (Hover + dynamische samenvatting)

In deze sectie toon ik boeken die ik recent heb gelezen.  
Wanneer je over een cover hovert, verschijnt de bijbehorende samenvatting in een vaste summary-box.

**Wat heb ik gedaan:**
- Covers overlappend gepositioneerd met flexbox
- Hover-effect toegevoegd met `transform` en `z-index`
- Met JavaScript de juiste titel en tekst in een vaste `.books__summary` gezet

Hier liep ik tegen layout-problemen aan (margin, positionering en “layout shifts”).  
Uiteindelijk heb ik gekozen voor één vaste summary-box in plaats van tekst boven elk boek.

**Bronnen:**
- MDN – querySelector & DOM manipulatie  
  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector  
- MDN – transform property  
  https://developer.mozilla.org/en-US/docs/Web/CSS/transform  

---

### 🎮 Quiz-sectie (Radio inputs + feedback)

Ik heb een kleine quiz gemaakt om de pagina persoonlijker te maken.

**Wat heb ik gedaan:**
- Semantische `<form>` gebruikt
- Radio buttons gekoppeld via `name`
- `data-correct` attribuut gebruikt om juiste antwoord te herkennen
- Feedback getoond via een `change` event

Hier merkte ik dat JavaScript snel complex wordt als je states moet resetten.

**Bronnen:**
- MDN – Form element  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form  
- MDN – addEventListener  
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  

---

### 🎬 API – Favoriete films van klasgenoten

In plaats van een random quote API heb ik gekozen voor iets persoonlijkers:  
de favoriete films van mijn klasgenoten (via de school API).

**Wat heb ik gedaan:**
- Data ophalen via `fetch`
- JSON verwerken
- Random index genereren
- Resultaat tonen in de DOM

Hier leerde ik beter omgaan met:
- Async/await
- JSON-structuur
- Error handling

**Bron:**
- MDN – Fetch API  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API  

---

### Custom Cursor (interactie-detail)

Ik heb een custom cursor gemaakt met drie lagen die de muis volgen.  
Dit is een decoratief element dat zorgt voor extra beleving.

Ik heb hier deels hulp bij gekregen van ChatGPT, vooral bij het verbeteren van de animatie met `requestAnimationFrame()`.

**Bronnen:**
- MDN – requestAnimationFrame  
  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame  
- MDN – pointer-events  
  https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events  

---

## Gebruik van hulpmiddelen

In dit project heb ik:

- Ongeveer 70–80% zelf gebouwd en uitgezocht
- Ongeveer 20–30% ondersteuning gekregen van ChatGPT
- MDN en officiële documentatie gebruikt als referentie

Wanneer ik ChatGPT gebruikte, probeerde ik altijd:
- De code te begrijpen
- Deze aan te passen aan mijn eigen structuur
- Niet blind te kopiëren

---

## Belangrijk inzicht

Ik heb geleerd dat:

- Interactie technisch vaak complexer is dan het lijkt.
- Scope beperken belangrijk is.
- Stabiliteit belangrijker is dan “zoveel mogelijk features”.
- Het web al veel native oplossingen biedt.

Deze OnePager voelt voor mij als een leerproces waarin ik ben gegroeid van “iets werkend krijgen” naar “begrijpen waarom het werkt”.




