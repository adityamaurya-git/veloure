import { getCartProductLS } from "../getProductFromLS"
import { showToast } from "../showToast"
import { updateCartProductTotal } from "../updateCartProductTotal"
import { updateCartValue } from "../updateCartValue"

let cartProducts = getCartProductLS()
export function removeProductFromCart(id){
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id)

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts)) 

    let removediv = document.querySelector(`#cart${id}`)

    if(removediv){
        removediv.remove()
        showToast("delete",id)
    }

    updateCartValue(cartProducts)
    updateCartProductTotal()
}



