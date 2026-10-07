export const NameValidator = {
    required: "Name is required"
}

export const PriceValidator = {
    required: "Price is required",

    min: {
        value:1.00,
        message: "Minimum price is 1.00"
    },
    setValueAs:((str: string) => Number(str.replace(",", "."))) 
}

export const CategoryValidator = {
    required: "Category is required"
}

export const StockValidator = {
    required: "Stock is required",
    min: {
        value: 1,
        message: "Minimum stock is 1"
    },
    setValueAs: ((str: string) => Number(str))
}
