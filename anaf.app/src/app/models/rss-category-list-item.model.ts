export interface IRssCategoryListItem {
    id: number;
    name: string;
    value: any;
}

export class RssCategoryListItem implements IRssCategoryListItem {
    id: number;
    name: string;
    value: any;
    constructor(id: number, name: string, value: any) {
        this.id = id;
        this.name = name;
        this.value = value;
     }
}