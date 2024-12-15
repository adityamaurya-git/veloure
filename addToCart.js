import { getCartProductLS } from "./getProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";

import { updateCartValue } from "./updateCartValue";


getCartProductLS()
export function addToCart(event, id) {
   let arrLocalStorage = getCartProductLS();

   let currentElement = document.querySelector(`#card${id}`)
   let price = currentElement.querySelector(".price").innerText
   const name = currentElement.querySelector(".name").textContent
   let quantity = currentElement.querySelector(".quantity").innerText

   // console.log(quantity,price)

   price = price.replace("$", "")



   let existingProduct = arrLocalStorage.find((product) => product.id === id)

   if (existingProduct && quantity > 1) {
      quantity = Number(existingProduct.quantity) + Number(quantity)
      price = Number(price * quantity)

      let updatedCart = { id, name, quantity, price }

      updatedCart = arrLocalStorage.map((currentProduct) => {
         return currentProduct.id === id ? updatedCart : currentProduct
      })
      console.log(updatedCart)
      localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

      showToast("add",id)
   }

   if (existingProduct) {
      return false;
   }
   price = Number(price * quantity)
   quantity = Number(quantity)


   arrLocalStorage.push({ id, name, quantity, price })
   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorage))

   updateCartValue(arrLocalStorage)
   showToast("add",id)
   updateCartProductTotal()

}