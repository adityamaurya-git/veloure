export function homeQuantityToggle(event,id){
    const currentElement = document.querySelector(`#card${id}`)
    const currentQuantity = currentElement.querySelector('.quantity')
    const currentPrice = currentElement.querySelector(".price")

    console.log(currentQuantity)
    let quantity = parseInt(currentQuantity.getAttribute("data-quantity")||1)

    if(event.target.className==="increment"){
        quantity+=1
    }

    if(event.target.className === "decrement"){
        if(quantity>1){
            quantity--;
        }
    }

    currentQuantity.innerText = quantity
    currentQuantity.setAttribute("data-quantity",quantity)
    return quantity
}