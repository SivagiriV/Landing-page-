// logo
const logo = "MNTN";
document.getElementById("logo").innerHTML = logo;

// list

var listItems = ["Equipment", "About us", "Blog"];

var lists = document.getElementById("list");

lists.innerHTML = "<ul>" + listItems.map( (listItem)=>{
    return "<li>" + listItem + "</li>";
}).join("") + "</ul>";


// header & slider
var active= document.getElementById('activate');
const header=document.getElementById("header");

window.onscroll = ()=>{
  
    // header
    var top = window.scrollY;
    if (top>=100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
    // slider
    var scroll=window.scrollY;
    if (scroll <= 700){
        active.style.top='0px';
    }
    else if ((scroll > 700) && (scroll < 1300)){
        active.style.top="80px";
    }
    else if((scroll > 1300) && (scroll<2100)) {
        active.style.top="160px";
    }
    else if (scroll>2100){
        active.style.top="240px";
    }
}

// img scroll

// const bg = document.querySelector('#ij');
// const windowWidth = window.innerWidth / 3;
// const windowHeight = window.innerHeight / 3 ;

// bg.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX / windowWidth;
//   const mouseY = e.clientY / windowHeight;
  
//   bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
// });
