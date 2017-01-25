/**
 * Model for rss-feed-category-list component
 * 
 * @export
 * @interface IRssCategoryListItem
 */
export interface IRssCategoryListItem {
    /**
     * Record ID. Must be unique
     * 
     * @type {number}
     * @memberOf IRssCategoryListItem
     */
    id: number;
    /**
     * Display text. It will be visible to the user
     * 
     * @type {string}
     * @memberOf IRssCategoryListItem
     */
    name: string;
    /**
     * Payload for further processing. Can have any value
     * 
     * @type {*}
     * @memberOf IRssCategoryListItem
     */
    value: any;
}

/**
 * Standard implementation for IRssCategoryListItem
 * 
 * @export
 * @class RssCategoryListItem
 * @implements {IRssCategoryListItem}
 */
export class RssCategoryListItem implements IRssCategoryListItem {
    /**
     * See IRssCategoryListItem
     * 
     * @type {number}
     * @memberOf RssCategoryListItem
     */
    id: number;
    /**
     * See IRssCategoryListItem
     * 
     * @type {string}
     * @memberOf RssCategoryListItem
     */
    name: string;
    /**
     * See IRssCategoryListItem
     * 
     * @type {*}
     * @memberOf RssCategoryListItem
     */
    value: any;
    /**
     * Creates an instance of RssCategoryListItem.
     * 
     * @param {number} id
     * @param {string} name
     * @param {*} value
     * 
     * @memberOf RssCategoryListItem
     */
    constructor(id: number, name: string, value: any) {
        this.id = id;
        this.name = name;
        this.value = value;
     }
}