let letters=document.querySelectorAll(".caption>p")
for(let i = 0; i<letters.length; i++){
  letters[i].style.animationDelay=i*0.1+"s";
}