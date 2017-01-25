# Rss Feed Category List

## Responsabilitati

- Afiseaza o lista de valori folosing controlul <ionic-list>
- emite un eveniment la fiecare click cu id-ul elementului selectat

## Mod de utilizare

### Initializare

```javascript

this.listName = "Info";
this.listItems = new Array<IRssCategoryListItem>();

/*
 * RssCategoryListItem(id,name,value)
 * - id : o valoara unica a elementului 
 * - name : textul afisat in lista 
 * - value: folosit ca payload pentru date suplimentare care ar trebui procesate la evenimentul de click
*/

this.listItems.push(new RssCategoryListItem(this.listItems.length, "Anunturi", { filterBy: "channelGroups", filterValue: ["ACHIZITII", "ACTE", "CONCURSURI", "INTERESGEN"] }));

```

### Afisare

```html
  
  <rss-channel-category [listName]="listName" [listItems]="listItems" (itemSelectedEvent)="itemSelectedListener($event)"></rss-channel-category>

```

### Implementare listener evenimente click

```javascript

  itemSelectedListener(event) {
    let listItem = this.listItems[event.value];
    ...
  }

```

**Atentie!** maparea dintre emiter si listener se face la nivelul afisarii html prin 

```html
<rss-channel-category ... (itemSelectedEvent)="itemSelectedListener($event)" ...></rss-channel-category>
```