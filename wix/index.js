var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Scroll to top

const heroSection = document.querySelector(".main");
const footSection = document.querySelector(".footer-section");
const scrollElement = document.createElement("div");


scrollElement.classList.add("scrollTop-style");            
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>` ;
footSection.after(scrollElement);

const scrollTop = () =>{
  heroSection.scrollIntoView({behavior:"smooth"})
}

scrollElement.addEventListener("click",scrollTop);