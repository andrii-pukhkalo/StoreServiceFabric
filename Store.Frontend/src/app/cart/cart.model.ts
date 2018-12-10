export class Cart {
    items : CartItem[]
}

export class CartItem {
    bookId : string
    count: number

    constructor(bookId : string, count : number) {
        this.bookId = bookId;
        this.count = count;
    }
}