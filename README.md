# Performance Matters

## Inleiding

Dit is soort van een fork van [oba-trophy](https://github.com/DanielvandeVelde/project-1-1819/) waarbij 'Performance Matters'.  
Dit betekend dat ik mij de komende tijd richt op het omzetten van mijn oba-trophy project en deze server-side maak.  
Bestanden worden kleiner, afbeeldingen geoptimaliseerd en veel meer interessante dingen.  

## Inhoudsopgave

1. [Installeren](#1-Installeren)
2. [Todo](#2-Todo)
2. [Week 1](#3-Week-1)

[Bronnen](#Bronnen)

## 1. Installeren

Het makkelijkste is om deze repository te forken en vervolgens:  
```
npm install
npm start # server draait op `localhost:3000`
```

## 2. Todo

- [x] Opzetten van een server
- [x] Prototype laten dx
- [x] Pug leren
- [x] Audit uitvoeren
- [x] Performance verbeteren via audit
- [x] Compression
- [ ] API calls server side maken
- [ ] NPM script voor minify/uglify
- [ ] Service worker
- [ ] Andere leuke dingen

## 3. Week 1

Het opzetten van een Node.js & Express server heb ik gelukkig al eens eerder gedaan.  
Met deze eerder ervaring was het niet een grote klus om dit weer te doen, al heb ik zeker weer even een aantal dingen op moeten zoeken.  
Mijn core functionaliteiten waren vrijwel volledig client-side, met de API call die clients-side gebeurde net zoals het renderen van de trofee.  
Ik ben daarom begonnen met het uitzoeken van [Pug](https://pugjs.org/).  
Dit had ik nog nooit eerder gebruikt en was dus erg leuk om uit te zoeken en te proberen.    

Ik heb een NPM script start aangemaakt, meer was niet nodig.
Verder heb ik onder het mom van performance compression zowel als een minifier toegepast.  
Tot slot heb ik text-compression toegevoegd en alle afbeeldingen vervangen door svg of Base64.

Oud:  
![Voor veranderingen](https://github.com/DanielvandeVelde/performance-matters-1819/blob/master/before%20audit.png "Voor veranderingen")

Nieuw:  
![Na veranderingen](https://github.com/DanielvandeVelde/performance-matters-1819/blob/master/after%20audit.png "Na veranderingen")

## Bronnen
[oba-trophy](https://github.com/DanielvandeVelde/project-1-1819/)
[OBA-API](https://zoeken.oba.nl/?uilang=en)   
[OBA-Wrapper](https://github.com/maanlamp/OBA-wrapper)   
[THREE.js](https://github.com/mrdoob/three.js/)   
[Trophy Cup 5 - Updated 8.4.2014](https://www.thingiverse.com/thing:245340)
