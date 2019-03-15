# Performance Matters

## Inleiding

Dit is soort van een fork van [oba-trophy](https://github.com/DanielvandeVelde/project-1-1819/) waarbij 'Performance Matters'.  
Dit betekend dat ik mij de komende tijd richt op het omzetten van mijn oba-trophy project en deze server-side maak.  
Bestanden worden kleiner, afbeeldingen geoptimaliseerd en veel meer interessante dingen.  

## Inhoudsopgave

1. [Demo](#1-Week-1)
2. [Install](#2-Installeren)
3. [Todo](#3-Todo)

[Sources](#Sources)

## 1. Week 1

Het opzetten van een Node.js & Express server heb ik gelukkig al eens eerder gedaan.  
Met deze eerder ervaring was het niet een grote klus om dit weer te doen, al heb ik zeker weer even een aantal dingen op moeten zoeken.  
Mijn core functionaliteiten waren vrijwel volledig client-side, met de API call die clients-side gebeurde net zoals het renderen van de trofee.  
Ik ben daarom begonnen met het uitzoeken van [Pug](https://pugjs.org/).  
Dit had ik nog nooit eerder gebruikt en was dus erg leuk om uit te zoeken en te proberen.    

Ik heb een NPM script start aangemaakt, meer was niet nodig.
Verder heb ik onder het mom van performance compression zowel als een minifier toegepast.  
Tot slot heb ik text-compression toegevoegd en alle afbeeldingen vervangen door svg of Base64.

Oud:
![Voor veranderingen](https://github.com/Danielvandevelde/performance-matters-1819/raw/master/before audit.png "Voor veranderingen")

Nieuw:
![Na veranderingen](https://github.com/Danielvandevelde/performance-matters-1819/raw/master/after audit.png "Na veranderingen")

## 2. Installeren

Het makkelijkste is om deze repository te forken en vervolgens:  
```
npm install
npm start # server draait op `localhost:3000`
```

## 3. Todo

Ik heb naar mijn mening nog lekker veel te doen.    

Als eerste denk ik te werken om de applicatie te splitsen in twee routes.  
Op deze manier kan ik de formulier submit laten werken als een route naar een andere pagina.  
Dan is er ook geen javascript nodig om alles in een enkele pagina te laden.    
Vervolgens kan met de formulier data serverside de api call worden gedaan.  
Daarna moet ik serverside three.js renderen, hier een afbeelding van maken en deze in een andere pagina te renderen.  
Vervolgens kan ik met javascript deze afbeelding vervangen tot een `<canvas>` element en deze met javascript door de gebruiker laten besturen.
Voor het downloaden van het trofee-object/het .stl bestand moet is er nog een andere workaround nodig.

## Bronnen
[oba-trophy](https://github.com/DanielvandeVelde/project-1-1819/)  
[OBA-API](https://zoeken.oba.nl/?uilang=en)   
[OBA-Wrapper](https://github.com/maanlamp/OBA-wrapper)   
[THREE.js](https://github.com/mrdoob/three.js/)   
[Trophy Cup 5 - Updated 8.4.2014](https://www.thingiverse.com/thing:245340)
