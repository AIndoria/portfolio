let toggle=0;
let navToggle=document.getElementById("nav");
function navClick(){
  toggle+=1;
  navToggle.classList.add("nav-expanded");
  document.getElementById("nav-list").style.display="flex";
}

document.addEventListener("click", function(event){
  if(event.target.closest(".nav") && !navToggle.matches('.nav-expanded')) navClick();
  else{
    document.getElementById("nav-list").style.display="none";
    navToggle.classList.remove("nav-expanded");
    navToggle.classList.add("nav");
  }
});

