let toggle=0;

function navClick(){
  toggle+=1;
  let navToggle=document.getElementById("nav");
  navToggle.classList.toggle("nav-expanded");
  navToggle.classList.toggle(".nav:hover");
}

document.addEventListener("click", function(event){
  let navToggle=document.getElementById("nav");
  if(event.target.closest(".nav")) navClick();
  else{
    navToggle.classList.remove("nav-expanded");
    navToggle.classList.add("nav");
  }
});
