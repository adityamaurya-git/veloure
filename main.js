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
  var tl = gsap.timeline()

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

const menuBtn = document.querySelector(".menuBtn i");
const close = document.querySelector(".close");

function asideBar() {

  var tl = gsap.timeline()

  tl.to("aside", {
    right: 0,
    duration: .5,
    ease: Power4.out,
  })
  tl.from(".h1Text h1", {
    x: 70,
    stagger: .2,
    duration: .5,
    opacity: 0,
  })
  tl.from(".close", {
    opacity: 0,
  })

  tl.pause()
  menuBtn.addEventListener("click", () => {
    tl.play()
  })

  close.addEventListener("click", () => {
    tl.reverse()
  })


}

asideBar()

function h1text() {


  const h1Text = document.querySelectorAll(".h1Text")

  h1Text.forEach((dets) => {

    dets.addEventListener("mouseenter", (elem) => {
      console.log(elem)
      gsap.to(dets.children[0], {
        x: 70,
      })

    })
    dets.addEventListener("mouseleave", (elem) => {
      gsap.to(dets.children[0], {
        x: 0,
      })
    })
  })

}

h1text()


// ASIDE BAR ENDS

var tl = gsap.timeline({scrollTrigger:{
  trigger:".heroHome",
  start:"50% 50%",
  end:"150% 50%",
  // markers:true,
  pin:true,
  scrub:true
}})
tl.to(".top-con",{
  rotateX:"110deg",
  opacity:0,
  duration:1
},"a")
tl.to(".bottom-con",{
  rotateX:"-110deg",
  opacity:0,
  duration:1
},"a")
tl.to(".video-container",{
  width:"100%",
  height:"100%",
  duration:4
},"a")

// INFO PAGE STARTS


const para = document.querySelector(".info p");
const imageback = document.querySelector(".imageback");

function infosection0() {


  gsap.to(imageback, {
    transform: "translateX(100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".info",
      scroller: "body",
      start: "top 70%",
    }
  }, "a")

  gsap.to(".simageback2", {
    transform: "translateX(100%)",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".info",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")


  gsap.from(".info p", {
    y: 12,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
      trigger: ".info",
      scroller: "body",
      start: "top 70%",
      end: "bottom 95%",
    }
  }, "a")

  gsap.from(".h1Text1 h1", {
    y: 140,
    stagger: .5,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".info-section",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")

}
infosection0()

function infosection1() {


  gsap.to(".section1 .imageback1", {
    transform: "translateX(100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      start: "top 80%",
      end: "bottom 70%",
      // markers:true,
    }
  }, "a")

  gsap.to(".simageback21", {
    transform: "translateX(100%)",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".info1",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")


  gsap.from(".info1 p", {
    y: 12,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
      trigger: ".info1",
      scroller: "body",
      start: "top 70%",
      end: "bottom 95%",
      // markers:true,
    }
  }, "a")

  gsap.from(".section1 .h1Text11 h1", {
    y: 140,
    stagger: .5,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")

}

infosection1()

function infosection2() {


  gsap.to(".section2 .imageback2", {
    transform: "translateX(100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 80%",
      end: "bottom 70%",
      // markers:true,
    }
  }, "a")

  gsap.to(".simageback22", {
    transform: "translateX(100%)",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".info2",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")


  gsap.from(".info2 p", {
    y: 12,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
      trigger: ".info2",
      scroller: "body",
      start: "top 70%",
      end: "bottom 95%",
      // markers:true,
    }
  }, "a")

  gsap.from(".section2 .h1Text12 h1", {
    y: 140,
    stagger: .5,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")

}

infosection2()

function infosection3() {


  gsap.to(".section3 .imageback3", {
    transform: "translateX(100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 80%",
      end: "bottom 70%",
      // markers:true,
    }
  }, "a")

  gsap.to(".simageback23", {
    transform: "translateX(100%)",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".info3",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")


  gsap.from(".info3 p", {
    y: 12,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
      trigger: ".info3",
      scroller: "body",
      start: "top 70%",
      end: "bottom 95%",
      // markers:true,
    }
  }, "a")

  gsap.from(".section3 .h1Text13 h1", {
    y: 140,
    stagger: .5,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 15%",
      end: "bottom 95%",
    }
  }, "b")

}

infosection3()


document.querySelectorAll(".info-section").forEach((pages, index) => {
  console.log(index)
  gsap.to(pages, {
    scale: .8,
    opacity: .7,
    scrollTrigger: {
      trigger: pages,
      start: "top 0%",
      end: "bottom 0%",
      scrub: true,
      // markers:true,
    }
  })
})



// INFO PAGE ENDS

// BRANDS PAGE STARTS

var tl3 = gsap.timeline()


tl3.to(".firstreveal .revealingTextTop", {
  width: "100%",
  scrollTrigger: {
    trigger: ".brands",
    scroller: "body",
    start: "15% 50%",
    end: "120% 50%",
    scrub: 1,
    // markers:true,
  }
})

tl3.to(".secondreveal .revealingTextTop", {
  width: "100%",
  scrollTrigger: {
    trigger: ".brands",
    scroller: "body",
    start: "20% 50%",
    end: "120% 50%",
    scrub: 1,
    // markers:true,
  }
})



window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    })
    gsap.to(".marque img", {
      rotate: 180,
    })
  }
  else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    })

    gsap.to(".marque img", {
      rotate: 0,
    })
  }
})



// BRANDS PAGE ENDS


// TEAM PAGE STARTS




// TEAM PAGE ENDS



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


window.addEventListener("mousemove",(dets)=>{
  gsap.to(".cursor",{
    x:dets.clientX,
    y:dets.clientY
  })
  gsap.to(".cursorOutline",{
    x:dets.clientX,
    y:dets.clientY,
    delay:.1
  })
})

const videoContainer = document.querySelector(".video-container")

videoContainer.addEventListener("mouseenter",()=>{
  gsap.to(".cursor",{
    width:"4rem",
    height:"4rem",
  })

})

videoContainer.addEventListener("mouseleave",()=>{
  gsap.to(".cursor",{
    width:"1rem",
    height:"1rem",
  })
})

document.querySelector("aside").addEventListener("mouseenter",()=>{
  gsap.to(".cursor",{
    backgroundColor:"#1E1005"
  })
  gsap.to(".cursorOutline",{
    borderColor:"#1E1005"
  })
})

document.querySelector("aside").addEventListener("mouseleave",()=>{
  gsap.to(".cursor",{
    backgroundColor:"#FBF0DA"
  })
  gsap.to(".cursorOutline",{
    borderColor:"#FBF0DA"
  })
})

document.querySelector(".container").addEventListener("mouseenter",()=>{
  gsap.to(".cursor",{
    backgroundColor:"#1E1005"
  })
  gsap.to(".cursorOutline",{
    borderColor:"#1E1005"
  })
})

document.querySelector(".container").addEventListener("mouseleave",()=>{
  gsap.to(".cursor",{
    backgroundColor:"#FBF0DA"
  })
  gsap.to(".cursorOutline",{
    borderColor:"#FBF0DA"
  })
})