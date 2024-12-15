import { updateCartValue } from "./updateCartValue"

export function getCartProductLS(){
    let cartProduct = localStorage.getItem("cartProductLS")

    if(!cartProduct){
        return[];
    }

    cartProduct = JSON.parse(cartProduct);
    updateCartValue(cartProduct);
    return cartProduct;

}
