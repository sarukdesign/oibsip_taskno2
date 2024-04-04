//navbar//

let nav = document.querySelector(".nav-wrapper")
window.onscroll= function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


let navbar = document.querySelectorAll('.nav-link1');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function() {
        navCollapse.classList.remove("show");
    })
});
