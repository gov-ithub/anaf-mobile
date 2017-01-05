
#RSS Feed Component

Afiseaza rezultatele unui feed RSS

##Utilizare

###Parametri de intrare

```javascript
param : IRssChannel;
```

###Configrare in componenta parinte

```javascript
import { RssService } from '../../providers/rss.service';
import { RssChannel, IRssChannel } from '../../models/rss-channel.model';

@Component({
  templateUrl: ...,
  providers: [RssService]
})

  rssChannel: IRssChannel;

  constructor(private navController: NavController, private rss: RssService) {
    this.rssChannel = new RssChannel();
    this.rss.getChannel("ACHIZITIE_BUCURESTI").subscribe(channel => {
      this.rssChannel = channel;
    },
      error => {
        console.error(error);
      });
  }

```

### Afisare in pagina parinte

```html
<rss-feed [channel]="rssChannel"></rss-feed>
```

##Componente de care depinde

`rss-feed-item`