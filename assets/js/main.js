
let adress=document.getElementById("adress");

function butik(){
let a=document.getElementById("hesab1").value;
let b= document.getElementById("hesab2").value;
let x= a % b
adress.innerHTML=x
adress.classList.add("cla")
}

