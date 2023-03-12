const hamburger = document.querySelector(".ham");
const navelis = document.querySelector(".nav-lis");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navelis.classList.toggle("active");
})
document.querySelectorAll(".nave-lis").forEach(n => n. addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navelis.classList.remove("active");
}))