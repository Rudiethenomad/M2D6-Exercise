console.log ("test");


document.getElementById("tag1").innerHTML = "Jail Broke Phones";

function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('darkgrey') });


 function myFunction() {
    let element = document.getElementByTag("td");
    element.classList.add("mylinks");
  };

 /* const get= document.getElementById('price');
get.click();

function buttonColor () {
    document. getElementById("price"). style. backgroundColor= red;
}

*/
//ex 9 and 12 are not working correctly.
//ex 9
function changeColor(){
    document.getElementById('price').classList.add('price');
};


//ex 12
const element = document.getElementById("footer");
element.innerHTML = "New Heading";

