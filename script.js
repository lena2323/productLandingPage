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




// ORDERS

 const mainDishesButtonInOrders = document.getElementById("mainDishesButtonInOrders");
 const mainDishesInOrders = document.getElementById("mainDishesInOrders");

 const pastaButtonInOrders = document.getElementById("pastaButtonInOrders");
 const pastaInOrders = document.getElementById("pastaInOrders");

 const pizzaButtonInOrders = document.getElementById("pizzaButtonInOrders");
 const pizzaInOrders = document.getElementById("pizzaInOrders");

 const veganButtonInOrders = document.getElementById("veganButtonInOrders");
 const veganInOrders = document.getElementById("veganInOrders");

 const drinksButtonInOrders = document.getElementById("drinksButtonInOrders");
 const drinksInOrders = document.getElementById("drinksInOrders");

 const dessertsButtonInOrders = document.getElementById("dessertsButtonInOrders");
 const dessertsInOrders = document.getElementById("dessertsInOrders");
//******************************************* */

subscribe.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.remove('hide');
    aboutUsContent.classList.add('hide');
    menuContents.classList.add('hide');
    mainDishes.classList.add('hide');
    order.classList.add('hide');

    //orders
    mainDishesInOrders.classList.add('hide');
    pastaInOrders.classList.add('hide');
    pizzaInOrders.classList.add('hide');
    veganInOrders.classList.add('hide');
    drinksInOrders.classList.add('hide');
    dessertsInOrders.classList.add('hide');
  });
  
  aboutUs.addEventListener('click',() =>{
    everythingToHide.classList.add('hide');
    subscribeContent.classList.add('hide');
    aboutUsContent.classList.remove('hide');
    menuContents.classList.add('hide');
    mainDishes.classList.add('hide');
    order.classList.add('hide');

    //orders
    mainDishesInOrders.classList.add('hide');
    pastaInOrders.classList.add('hide');
    pizzaInOrders.classList.add('hide');
    veganInOrders.classList.add('hide');
    drinksInOrders.classList.add('hide');
    dessertsInOrders.classList.add('hide');

});

menu.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.remove('hide');
  mainDishes.classList.add('hide');
  order.classList.add('hide');

  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});

mainDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.remove('hide');
  order.classList.add('hide');

  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});

orderButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');

  //orders
  mainDishesInOrders.classList.remove('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');
});



//***************************ORDERS Main dishes****************


mainDishesButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.remove('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');
});

//***************************ORDERS Pasta****************

pastaButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.remove('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');


});
//***************************ORDERS Pizza****************


pizzaButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.remove('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');


});

//***************************ORDERS Vegan dishes****************


veganButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.remove('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');


});


//***************************ORDERS Drinks****************


drinksButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.remove('hide');
  dessertsInOrders.classList.add('hide');


});


//***************************ORDERS Desserts****************


dessertsButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');




  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.remove('hide');


});