
 var ar = document.getElementsByClassName("ar");
 var en = document.getElementsByClassName("en");




function enFunction() {
for (var i = 0; i < ar.length; i++) {
 ar[i].classList.add("d-none");
}
for (var i = 0; i < en.length; i++) {
 en[i].classList.remove("d-none");
}
 }
 function arFunction() {
for (var i = 0; i < en.length; i++) {
 en[i].classList.add("d-none");
}
for (var i = 0; i < ar.length; i++) {
 ar[i].classList.remove("d-none");
}

 }



  

  
