export class Book {
    id : string
    name : string
    price: Price

    public priceInCurrency(): string {
        return this.price.amount + this.price.currency;
    }
}

export class Price {
    amount: number
    currency: string
}