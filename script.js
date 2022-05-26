const everythingToHide = document.getElementById("everythingToHide");
const subscribe = document.getElementById("subscribe");
const subscribeContent = document.getElementById("subscribeContent");
const aboutUs =  document.getElementById("aboutUs");
const aboutUsContent = document.getElementById("aboutUsContent");

const navBarAddMarginBot = document.getElementById("nav-bar");

subscribe.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.add('show');

  });
  
  aboutUs.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.add('hide');
    aboutUsContent.classList.add('show');

});