const everythingToHide = document.getElementById("everythingToHide");
const subscribe = document.getElementById("subscribe");
const subscribeContent = document.getElementById("subscribeContent");
const aboutUs =  document.getElementById("aboutUs");
const aboutUsContent = document.getElementById("aboutUsContent");
const menu =  document.getElementById("menu");
const menuContents = document.getElementById("menuContents");


const mainDishesButton =  document.getElementById("main-dishes-button");
const mainDishes = document.getElementById("main-dishes-div");

const orderButton =  document.getElementById("order-button");
const order = document.getElementById("order");


subscribe.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.remove('hide');
    aboutUsContent.classList.add('hide');
    menuContents.classList.add('hide');
    mainDishes.classList.add('hide');
    order.classList.add('hide');

  });
  
  aboutUs.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.add('hide');
    aboutUsContent.classList.remove('hide');
    menuContents.classList.add('hide');
    mainDishes.classList.add('hide');
    order.classList.add('hide');

});

menu.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.remove('hide');
  mainDishes.classList.add('hide');
  order.classList.add('hide');

});

mainDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.remove('hide');
  order.classList.add('hide');

});

orderButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');

});
