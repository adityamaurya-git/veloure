import { addToCart } from "../addToCart";
import { homeQuantityToggle } from "../homeQuantityToggle";

const templateContainer = document.querySelector(".templateContainer");

const productContainer = document.querySelector(".product-list");

export function showProduct(products){

    if(!products){
        return false;
    }
    products.forEach((element)=>{
        const{id,name,price,img}=element

        const productClone = document.importNode(templateContainer.content , true)

        productClone.querySelector(".product").setAttribute("id",`card${id}`)
        productClone.querySelector(".image").src=img
        productClone.querySelector(".name").textContent = name
        productClone.querySelector(".price").textContent =`$${price}`


        productClone.querySelector(".productQuantity").addEventListener("click",(event)=>{
            homeQuantityToggle(event ,id)
        })

        productClone.querySelector(".add").addEventListener("click",(event)=>{
            addToCart(event , id )
        })

        productContainer.append(productClone)

    })

}
