const cartNo = document.querySelector(".cartno")

export function updateCartValue(cartProducts){
    cartNo.style.display = "block"
    return (cartNo.textContent=cartProducts.length)
}