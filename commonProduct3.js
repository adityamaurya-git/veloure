
import products3 from "./product3.json"
import { showProduct } from "./showProduct.js"
import { addToCart } from "./addToCart.js";


// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

// LOADER
const loadCircle = document.querySelector(".load-circle");
const loader = document.querySelector(".loader");
const leftSvg = document.querySelector(".left svg line")
const rightSvg = document.querySelector(".right svg line")
const topSvg = document.querySelector(".load-circle .top line")
const lastSvg = document.querySelector(".load-circle .last line")


// LOADER GSAP STARTS


window.addEventListener("load", () => {
  var tl = gsap.timeline({ delay: .5 })

  tl.to("svg circle", {
    duration: 1,
    strokeDashoffset: 772,
  }, "b")
  tl.to(leftSvg, {
    duration: 1,
    attr: {
      y2: 0,
    }
  }, "b")
  tl.to(rightSvg, {
    duration: 1,
    attr: {
      y1: 631.5,
    }
  }, "b")

  tl.to(topSvg, {
    strokeWidth: .1,
    // opacity:0,
    duration: 1,
    attr: {
      y2: 0
    }
  }, "b")

  tl.to(lastSvg, {
    strokeWidth: .1,
    // opacity:0,
    duration: 1,
    attr: {
      y2: 300
    }
  }, "b")

  tl.to(".left", {
    transform: "translateX(-100%)",
    duration: .8,
  }, "a")
  tl.to(".right", {
    transform: "translateX(100%)",
    duration: .8,
  }, "a")
  tl.to(loader, {
    display: "none"
  })
})


// LOADER ENDS


// ASIDE BAR STARTS

// const menuBtn = document.querySelector(".fa-cart-plus");
// const close = document.querySelector(".close");

// function asideBar() {

//     var tl = gsap.timeline()

//     tl.to("aside", {
//         right: 0,
//         duration: .5,
//         ease: Power4.out,
//     })
//     tl.from(".close", {
//         opacity: 0,
//     })

//     tl.pause()
//     menuBtn.addEventListener("click", () => {
//         tl.play()
//     })

//     close.addEventListener("click", () => {
//         tl.reverse()
//     })


// }

// asideBar()

// const shImage = document.querySelectorAll(".shImage img");
// shImage.forEach((event) => {
//     gsap.to(event, {
//         scale: .7,
//         opacity: .7,
//         scrollTrigger: {
//             trigger: event,
//             start: "top 0%",
//             end: "bottom 0%",
//             scrub: true,
//             // markers:true,
//         }
//     })
// })

let navbar2 = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const navbarHeight = navbar2.getBoundingClientRect().height
  const windowHeight = window.pageYOffset
  if (windowHeight > 1887) {
    navbar2.style.backgroundColor = "#1E1005";
  }
  else if (windowHeight < 1887) {
    navbar2.style.backgroundColor = "transparent";

  }
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







window.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    x: dets.clientX,
    y: dets.clientY
  })
  gsap.to(".cursorOutline", {
    x: dets.clientX,
    y: dets.clientY,
    delay: .1
  })
})

showProduct(products3)
addToCart(products3);
