# Aplicatie mobila pentru ANAF [![Build Status](https://travis-ci.org/gov-ithub/anaf-mobile.svg?branch=master)](https://travis-ci.org/gov-ithub/anaf-mobile) [![Quality Gate](https://sonarqube.com/api/badges/gate?key=govithub:anaf-mobile)](https://sonarqube.com/dashboard?id=govithub:anaf-mobile)
Se doreste o aplicatie independenta care, pentru inceput, va furniza o serie de informatii/notificari generale (valorificare bunuri, noutati legislative, calendar obligatii fiscale, anunturi) grupate pe categorii, precum si cateva instrumente de calcul (existente deja pe site-ul www.anaf.ro). Utilizatorul isi va putea seta un profil in baza caruia sa filtreze informatiile/notificarile pe care le va primi. Intr-un pas ulteior, aplicatia se va integra cu si va prelua functionalitatiile Spatiului Privat Virtual.

## Instalare

### Configurari IDE

#### MS Visual Studio Community
- Type Script 2.0 Tools
- Sterge din C:\Program Files (x86)\Microsoft Visual Studio 14.0\Web\External node, npm si node_modules
- Vom folosi nodejs de la sursa

#### Webstorm
- [Suport TypeScript](https://www.jetbrains.com/help/webstorm/2016.3/typescript-support.html)
- [Utilizare PhoneGap/Cordova](https://www.jetbrains.com/help/webstorm/2016.2/using-phonegap-cordova.html)

### General
- Instaleaza ultima versiune de NodeJS & NPM https://nodejs.org/en/

### In directorul cu anaf.app
- shell: 
```
cd ./anaf.app 
npm install
npm install -g cordova
npm install -g ionic
cd src
typings install
cd ..
mkdir platforms
mkdir plugins
mkdir www

ionic state restore
npm run serve
```
- acceseaza in browser adresa servita de ionic


## Tehnologii folosite
- [Ionic 2] (http://ionicframework.com/), [docs] (http://ionicframework.com/docs/v2/)
- [AngularJS 2] (https://angular.io/)
- [Cordova] (https://cordova.apache.org/)

## Development IDE & tools:
- Recomandat 
	- [Visual Studio Community] (https://www.visualstudio.com/vs/community/), are deja plugin-uri pentru cordova si ripple
	- [Webstorm] (https://www.jetbrains.com/webstorm/)
- Alte IDE-uri pot fi folosite

## Contribuie

Dacă vrei să contribui - ești binevenit(ă) - but we don't have cookies (yet) 

### Proces
- Vezi lista de tehnologii folosite - îți sunt familiare?
- Dacă nu ești încă înscris(ă) în comunitate, te rog fă-o pe [site-ul de voluntari GovITHub](http://voluntari.ithub.gov.ro/)
- Aruncă o privire la [guidelines](https://github.com/gov-ithub/guidelines/blob/master/CODE_REVIEW.md) pentru code review 
- Caută în issues un task interesant pentru tine (sau, dacă ai o propunere, deschide un issue / trimite un pull request). 
- După ce trecem prin code review - celebrate! :star: :star2: :star:

## Cum poti intra in contact cu echipa?
- Email: alexandru.chiraples@ithub.gov.ro
- Slack: @alex.chiraples. Pentru invite intrați pe http://govitslack.herokuapp.com/

Mai multe detalii în curând! 
