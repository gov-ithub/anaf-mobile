# RSS Service

Serviciu care indeplineste urmatoarele functionalitati:
- citeste din fisierul de configurare lista de canale RSS
- cauta in lista de servicii RSS un canal anume
- citeste feed-ul RSS aferent unui canal si il converteste intr-un obiect JSON

## Instalare

### Instale pachete dependente

- `cd anaf.app`
- `npm install`
- `cd src`
- `typescript install`

## Configurare

### Configurare lista de canale RSS

In fisierul `/shared/config.ts` se vor adauga canalele RSS in constanta `RSS_CHANNEL_LIST`.
Exemplu de configurare canal:

```javascript 

export const RSS_CHANNEL_LIST: IRssChannels={
    channels:[{
        tag:"BUC_ACH_BUN",
        title: "Bucuresti - RSS - Anunturi de achizitie bunuri si servicii",
        description:"Bucuresti - RSS",
        link:"https://www.anaf.ro/BucurestiRSS/?canal=achizBS",
        channelGroup:{
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    }]
}

```

### Configurare aplicatie `app.modules.ts`

Se adauga in lista de providers serviciul si lista de canale configurate

```javascript
providers: [
        ...,
        RssService,
        { provide: RSS_CHANNEL_LIST_TOKEN, useValue: RSS_CHANNEL_LIST }, //required for RSS Channel List configuration
        ....
    ],
```

## Utilizare
### Listare canale RSS configurate

```javascript

import {RssService} from '../../providers/rss.service';
import {RssChannel,RssFeed, RssChannels} from '../../models/index';

@Component({
    selector:...,
    templateUrl:...,
    providers:[RssService,RssChannel,RssFeed]
})

export class RssComponent{
    constructor(private rss:RssService, private rssChannel : RssChannel){ 

        this.rss.getChannelList().subscribe(channelList=>{
            for(let channel of channelList.channels){
                console.log(channel.description);
            }
        });  
}


```
### Cautare canal RSS in lista de canale configurate

```javascript

import {RssService} from '../../providers/rss.service';
import {RssChannel,RssFeed, RssChannels} from '../../models/index';

@Component({
    selector:...,
    templateUrl:...,
    providers:[RssService,RssChannel,RssFeed]
})

export class RssComponent{
    constructor(private rss:RssService, private rssChannel : RssChannel){ 
    
    this.rss.getChannel("BUC_ACH_BUN").subscribe(
            channel=>{
                this.rssChannel = channel;
            },
            error=>{
                console.log(error);
            }
        );

}


```

### Citire feed RSS

```javascript

import {RssService} from '../../providers/rss.service';
import {RssChannel,RssFeed, RssChannels} from '../../models/index';

@Component({
    selector:...,
    templateUrl:...,
    providers:[RssService,RssChannel,RssFeed]
})

export class RssComponent{
    constructor(private rss:RssService, private rssChannel : RssChannel){ 
    
    this.rss.getChannel("BUC_ACH_BUN").subscribe(
            channel=>{
                this.rssChannel = channel;
            },
            error=>{
                console.log(error);
            }
        );

}

    getRssFeed():void{
        this.rss.getRssFeed(this.rssChannel)
                .subscribe(
                    result=>{
                        this.rssFeed = result;
                        console.log(this.rssFeed);
                    },
                    error=>{
                         console.log(error);
                    }
                )
    }

```


## Librarii utilizate 
- xml-js [Detalii de configurare] (https://www.npmjs.com/package/xml-js)


