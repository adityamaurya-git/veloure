import { getCartProductLS } from "./getProductFromLS"
import { updateCartProductTotal } from "./updateCartProductTotal"
import { updateCartValue } from "./updateCartValue"

let cartProducts = getCartProductLS()

console.log(cartProducts)
export function clearCart(event , id){

    localStorage.removeItem("cartProductLS");
    cartProducts = [];
    updateCartValue(cartProducts);
    updateCartProductTotal(cartProducts);
    document.querySelector(".leftContainer").innerHTML =""
    alert(" Thank You !!  Your Order has been placed !");
    
}