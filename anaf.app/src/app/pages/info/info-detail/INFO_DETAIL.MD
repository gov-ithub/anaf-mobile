# Info detail

## Responsabilitati

- afiseaza recursiv pagini cu liste de tip <ionic-list>
- capteaza evenimentele de click din listele afisate

## Dependente 

Depinde de componenta `rss-feed-category-list`

## Mod de utilizare

Este initializata de componenta `info`

```javascript

  itemSelectedListener(event) {
    let listItem = this.listItems[event.value];
    this.updateListItems(listItem);
  }

...

  private updateListItems(selectedItem: IRssCategoryListItem): void {

    this.navCtrl.push(InfoDetailPage, { options: selectedItem });

  }

```