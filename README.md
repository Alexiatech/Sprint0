# Sprint0


# OnePager – Proces & Reflectie

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


# Weekly Nerd – Kilian Valkhof (Polyplane)

## Wie was er?

Tijdens deze Weekly Nerd kwam Kilian Valkhof spreken, de maker van Polyplane.

Polyplane is een tool waarmee je je website tegelijkertijd kunt bekijken op meerdere schermformaten, zoals desktop, tablet en mobiel. Het is bedoeld om snel te zien hoe responsive je website echt is en of je media queries goed werken.

Als front-end student vond ik dit meteen interessant, omdat responsive design iets is waar ik zelf ook veel mee bezig ben.

---

## Wat is mij bijgebleven?

Wat mij vooral is bijgebleven, is dat veel dingen die wij snel met JavaScript proberen op te lossen, eigenlijk al mogelijk zijn met HTML en CSS.

Hij liet bijvoorbeeld het `<dialog>` element zien.  
In plaats van zelf een hele pop-up te bouwen met divs en veel JavaScript, kun je gebruikmaken van een ingebouwd HTML-element dat hier speciaal voor bedoeld is.

Dat was voor mij echt een inzicht-moment.

Ik merk namelijk dat ik vaak denk:
"Dit moet met JavaScript."

Maar soms kan het veel simpeler.

---

## Wat heb ik hiervan geleerd?

Ik heb geleerd dat:

- Het web al veel ingebouwde functionaliteit heeft.
- Minder JavaScript je code overzichtelijker kan maken.
- Simpelere oplossingen vaak stabieler zijn.
- Je eerst moet kijken wat HTML en CSS kunnen voordat je naar JavaScript grijpt.

Tijdens het werken aan mijn eigen OnePager merkte ik ook dat JavaScript snel complex wordt.  
Bijvoorbeeld bij API’s of foutmeldingen — je bent veel tijd kwijt aan debuggen.

Deze Weekly Nerd voelde daarom als een reminder:
Het hoeft niet altijd ingewikkeld.

---

## Hoe heb ik dit toegepast?

Ik heb in mijn eigen OnePager het `<dialog>` element gebruikt voor een pop-up.

De structuur is HTML.  
De styling is CSS.  
Alleen de timing (via een timer) heb ik met JavaScript gedaan, zodat de pop-up automatisch verschijnt na een paar seconden.

Dus ik heb geprobeerd bewuster om te gaan met wanneer ik JavaScript gebruik.

---

## Slides van de presentatie

Hieronder een paar foto’s die ik tijdens de presentatie heb gemaakt:

![Slide 1](./images/slide_1.jpg)
![Slide 1](./images/slide_2.jpg)
![Slide 1](./images/slide_3.jpg)

Deze slides laten goed zien dat veel oplossingen simpeler zijn dan we denken.

---

## Persoonlijke reflectie

Deze Weekly Nerd heeft mij vooral laten nadenken over hoe ik code schrijf.

Ik ben iemand die graag experimenteert en nieuwe dingen probeert (zoals API’s en interactieve elementen).  
Maar soms is het goed om even terug te gaan naar de basis.

Niet alles hoeft met extra JavaScript opgelost te worden.  
Soms is minder juist sterker.

Dat ga ik zeker meenemen in mijn volgende projecten.


