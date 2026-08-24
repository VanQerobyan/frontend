export type ProductItem = {
    id: number
    name: string
    price: number
    color: string[]
    picture: string
}

export type BasketItem = ProductItem & {quantity: number}