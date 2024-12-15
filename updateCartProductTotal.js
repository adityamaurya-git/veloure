import { getCartProductLS } from "./getProductFromLS";

export function updateCartProductTotal(){

    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal")
    let shippingTotal = document.querySelector(".productShipping")
    
    let cartProducts = getCartProductLS()
    let initialValue =0;
    let totalProductPrice = cartProducts.reduce((accum , curElem)=>{
        let ProductPrice = parseInt(curElem.price) || 0;
        return accum + ProductPrice;
    },initialValue)

    totalProductPrice = Number(totalProductPrice)
    productSubTotal.innerText = `$${totalProductPrice}`
    shippingTotal.innerText = `$${totalProductPrice*0.0009}`
    let replaced = Number((shippingTotal.innerText).replace("$",""))
    productFinalTotal.innerText = `$${totalProductPrice+50+replaced}`
    
}