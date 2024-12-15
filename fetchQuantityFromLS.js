import { getCartProductLS } from "./getProductFromLS";

export function fetchQuantityFromLS(id,price){
    let cartProduct = getCartProductLS()

    let existingProduct = cartProduct.find((curProd)=> curProd.id === id)
    let quantity =1
    
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price
    }

    return {quantity,price}

}