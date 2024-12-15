import products from "./product.json"
import { cartQuantityToggle } from "./cartQuantityToggle";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductLS } from "./getProductFromLS";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { clearCart } from "./clearCart";

const leftContainer = document.querySelector(".leftContainer");
const templateCartContainer = document.querySelector(".templateCartContainer");

let cartProducts = getCartProductLS()

let filterProducts = products.filter((apiProduct) => {
    return cartProducts.some((LSproduct) => LSproduct.id === apiProduct.id)
})


function showfilterProduct() {
    filterProducts.forEach((currentElement) => {

        const { id, name, price, img } = currentElement

        let ProductClone = document.importNode(templateCartContainer.content, true)

        let LSActualData = fetchQuantityFromLS(id,price)

       
        ProductClone.querySelector(".cartProduct").setAttribute("id", `cart${id}`)
        ProductClone.querySelector(".cartImage").src = img
        ProductClone.querySelector(".cartName").textContent = name
        ProductClone.querySelector(".quantity").textContent = `${LSActualData.quantity}`
        ProductClone.querySelector(".cartPrice").textContent = `$${LSActualData.price}`
       

        ProductClone.querySelector(".fa-xmark").addEventListener("click",()=>{
            removeProductFromCart(id)
        })

        ProductClone.querySelector(".productQuantity").addEventListener("click",(event)=>{
            cartQuantityToggle(event,name,id,price);
        })

        leftContainer.append(ProductClone)
    })
}
document.querySelector(".checkoutBtn").addEventListener("click",(event)=>{
    clearCart(event);
})


// SUB FOOTER STARTS

function subfooter() {
    var initialPath = "M 10 150 Q 625 150 1250 150";
  
    var finalPath = "M 10 150 Q 625 150 1250 150";
  
    var string = document.querySelector(".string")
  
    string.addEventListener("mousemove", function (dets) {
  
      console.log(dets.x)
      initialPath = `M 10 150 Q ${dets.x * .6} ${dets.y * .6} 1240 150`
      gsap.to("svg path", {
        attr: {
          d: initialPath
        },
        duration: 0.2,
        ease: "power3.out"
  
      })
    })
  
    string.addEventListener("mouseleave", (dets) => {
  
      gsap.to("svg path", {
        attr: {
          d: finalPath
        },
        duration: 1,
        ease: "elastic.out(1,0.2)"
      })
    })
  
  
  }
  
  subfooter()
  
  function breakTheText() {
  
    const h1 = document.querySelector(".logoContainer h1");
    const h1Text = h1.textContent;
  
    const splittedText = h1Text.split("");
    const length = splittedText.length / 2;
    var clutter = "";
  
    splittedText.forEach((element, index) => {
      if (index < length) {
        clutter += `<span class="a">${element}</span>`
      }
      else {
  
        clutter += `<span class="b">${element}</span>`
      }
    })
    h1.innerHTML = clutter;
  }
  breakTheText();
  
  
  gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: .4,
    delay: .2,
    stagger: .1,
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      start: "top 75%",
  
    }
  
  })
  
  gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: .4,
    delay: .2,
    stagger: -.1,
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      start: "top 75%"
  
    }
  })
  
  
  // SUB FOOTER ENDS


showfilterProduct()
updateCartProductTotal()