import { getCartProductLS } from "./getProductFromLS"
import { updateCartProductTotal } from "./updateCartProductTotal"

export function cartQuantityToggle(event, name,id, price) {
    const currentElement = document.querySelector(`#cart${id}`)
    let currentElementPrice = currentElement.querySelector(".cartPrice")
    let currentElementQuantity = currentElement.querySelector(".quantity")


    let quantity = 1
    let localStoragePrice = 0

    let LocalCartProduct = getCartProductLS();
    let existingProduct = LocalCartProduct.find((curProd) => curProd.id === id)

    if (existingProduct) {
        quantity = existingProduct.quantity
        localStoragePrice = existingProduct.price
    }
    else {
        localStoragePrice = price
        price = price
    }

    if (event.target.className === "increment") {
        quantity++
    }

    if (event.target.className === "decrement") {
        if (quantity > 1) {
            quantity--;
        }
    }

    localStoragePrice = Number(price * quantity)
    localStoragePrice = localStoragePrice.toFixed(2)

    let updatedCart = { id,name, quantity, price: localStoragePrice }

    updatedCart = LocalCartProduct.map((currentProduct) => {
        return currentProduct.id === id ? updatedCart : currentProduct
    })
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

    currentElementQuantity.innerText = quantity
    currentElementPrice.innerText = `$${localStoragePrice}`
    updateCartProductTotal()


}