var a=document.getElementById('bdy');
window.addEventListener("load",attach);
console.log("in");

function attach(){
    sessionStorage.clear();
    var  a=document.getElementsByClassName('cardm');
    attachL(a);
}

function attachL(card){
 for(var i=0;i<card.length;i++){
     card[i].addEventListener('click',check);
 }
}

function check(){
    var ele=this.getElementsByClassName("card-title")[0].innerText;
    sessionStorage.setItem('Event',ele);
    window.location="events.html";
}

