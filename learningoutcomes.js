/***read more button overlay */
function openOverlay() {
    document.getElementById("overlay").style.display = "block";
  }

  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";

  }
  function openOverlay2() {
    document.getElementById("overlay2").style.display = "block";
  }

  function closeOverlay2() {
    document.getElementById("overlay2").style.display = "none";

  }
/****image carousel */

const $carousels = [...document.querySelectorAll("[data-component='carousel']")];
$carousels.forEach(($carousel) => {

    
//ui elements
const $list= $carousel.querySelector("[data-id='carousel-list']");
const $previous = $carousel.querySelector("[data-id='carousel-previous']");
const $next = $carousel.querySelector("[data-id='carousel-next']");

console.log($list.children);
//variables
const limit = 7;
let index= 0;
let current = $list.children[index];
console.log(current);


//event listeners
$previous.onclick=function(){
    // only when index is bigger than 0.
    if (index > 0){
        $list.classList.add ("direction-left");
        $list.classList.remove ("direction-right");
        current.classList.remove("visible");    
    //decrement index
    index = index - 1;
    current = $list.children[index];
    current.classList.add("visible");
    console.log("previous", index, current);
    }
}
$next.onclick=function(){
    //only when index is smaller than 8.
    if (index < limit){
        $list.classList.add ("direction-right");
        $list.classList.remove ("direction-left");
        current.classList.remove("visible");    

    //increment index
    index = index + 1;
    current = $list.children[index];
    current.classList.add("visible");
    console.log("next", index);
    }
}

})


