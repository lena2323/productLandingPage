const everythingToHide = document.getElementById("everythingToHide");
const subscribe = document.getElementById("subscribe");
const subscribeContent = document.getElementById("subscribeContent");
const aboutUs =  document.getElementById("aboutUs");
const aboutUsContent = document.getElementById("aboutUsContent");
const menu =  document.getElementById("menu");
const menuContents = document.getElementById("menuContents");




// ORDERS VAR

const orderButton =  document.getElementById("order-button");
const order = document.getElementById("order");

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
//********************************************/



function hideOrders() {
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');
}

function hideMenu() {
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');
}

function hideHamburger() {
  navBar.classList.remove('show');
  hamburger.classList.add('notActive');
}

function everythingToHideOnLandingPage(){
    everythingToHide.classList.add('hide');
    subscribeContent.classList.add('hide');
    aboutUsContent.classList.add('hide');
    menuContents.classList.add('hide');
    mainDishes.classList.add('hide');
    order.classList.add('hide');
  
}



function hideEverythingToShowOrders(){
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');
}



function menuInMenu() {
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');
}


function ordersInOrders(){
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');
}



subscribe.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  hideOrders()
  hideMenu()
  hideHamburger()
  subscribeContent.classList.remove('hide');

});


aboutUs.addEventListener('click',() =>{    
  everythingToHideOnLandingPage()
  hideOrders()
  hideMenu()
  hideHamburger()
  aboutUsContent.classList.remove('hide');

});

menu.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  hideOrders()
  hideMenu()
  hideHamburger()
  menuContents.classList.remove('hide');

});


orderButton.addEventListener('click',() =>{
  
  everythingToHideOnLandingPage()
  hideOrders()
  hideMenu()
  hideHamburger()
  order.classList.remove('hide');
  mainDishesInOrders.classList.remove('hide');
});

// MENU VAR


const mainDishesButton =  document.getElementById("main-dishes-button");
const mainDishes = document.getElementById("main-dishes-div");


const pastaDishesButton = document.getElementById("pasta-dishes-button");
const pastaDishesInMenu = document.getElementById("pasta-in-menu-div");

const pizzaDishesButton = document.getElementById("pizza-dishes-button");
const pizzaDishesInMenu = document.getElementById("pizza-in-menu-div");

const veganDishesButton = document.getElementById("vegan-dishes-button");
const veganDishesInMenu = document.getElementById("vegan-in-menu-div");

const drinksDishesButton = document.getElementById("drinks-button");
const drinksInMenu = document.getElementById("drinks-in-menu-div");

const dessertsDishesButton = document.getElementById("desserts-button");
const dessertsDishesInMenu = document.getElementById("desserts-in-menu-div"); 


/******************MENU BUTTONS***************** */





mainDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  hideOrders()
  menuInMenu()
  mainDishes.classList.remove('hide');
});

pastaDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  menuInMenu()
  hideOrders()
  pastaDishesInMenu.classList.remove('hide');

});


pizzaDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  menuInMenu()
  hideOrders()
  pizzaDishesInMenu.classList.remove('hide');

});

veganDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  menuInMenu()
  hideOrders()
  veganDishesInMenu.classList.remove('hide');

});

drinksDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  menuInMenu()
  hideOrders()
  drinksInMenu.classList.remove('hide');

});

dessertsDishesButton.addEventListener('click',() =>{
  everythingToHideOnLandingPage()
  menuInMenu()
  hideOrders()
  dessertsDishesInMenu.classList.remove('hide');
});





//***************************ORDERS Main dishes****************


mainDishesButtonInOrders.addEventListener('click',() =>{
  ordersInOrders()
  hideEverythingToShowOrders()
  hideMenu()
  mainDishesInOrders.classList.remove('hide');
});

//***************************ORDERS Pasta****************

pastaButtonInOrders.addEventListener('click',() =>{
  hideEverythingToShowOrders()
  ordersInOrders()
  hideMenu()
  pastaInOrders.classList.remove('hide');
});
//***************************ORDERS Pizza****************


pizzaButtonInOrders.addEventListener('click',() =>{
  hideEverythingToShowOrders()
  ordersInOrders()
  hideMenu()
  pizzaInOrders.classList.remove('hide');
});

//***************************ORDERS Vegan dishes****************


veganButtonInOrders.addEventListener('click',() =>{
  hideEverythingToShowOrders()
  ordersInOrders()
  hideMenu()
  veganInOrders.classList.remove('hide');
});


//***************************ORDERS Drinks****************


drinksButtonInOrders.addEventListener('click',() =>{
  hideEverythingToShowOrders()
  ordersInOrders()
  drinksInOrders.classList.remove('hide');
  hideMenu()
});


//***************************ORDERS Desserts****************


dessertsButtonInOrders.addEventListener('click',() =>{
  hideEverythingToShowOrders()
  ordersInOrders()
  dessertsInOrders.classList.remove('hide');
  hideMenu()
});


// ********* SHOPPING CART  **********************

let allTotal = 0;

function addToCart(element){
  let mainEl = element.closest('.singleDish')
  let price = mainEl.querySelector('.price').innerText;
  let name = mainEl.querySelector('h3').innerText;
  let quantity =  mainEl.querySelector('input').value;
  let cartItems = document.querySelector('.cartItems');

  if (parseInt(quantity) > 0){
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);

    allTotal += total;

    cartItems.innerHTML += 
    `<div class= "cartItems">  
      <p> <div class= "dishName">${name}</div> x ${quantity} <div class="totalNone"> ${price}= $<span>${total}</span></div>
      </p>
    <button onclick="removeFromCart(this)">Delete entry</button>
    </div>`;

    document.querySelector('.total').innerText = `Total: $${allTotal}`

    document.getElementById('hidden input').value += ` Product: ${name} Quantity: ${quantity}`
    
    document.getElementById('hidden input for total').value = ` Total: $${allTotal}`


    element.innerText = 'Added';
    element.setAttribute('disabled', 'true');

  } else{
    alert('Please specify the quantity');
  }
}

function removeFromCart(element){
    let mainEl = element.closest('.cartItems');
    let price = mainEl.querySelector('.totalNone span').innerText;
    let name = mainEl.querySelector('.dishName').innerText; 
    let allDishes = document.querySelectorAll('.singleDish');


    price= parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`
    mainEl.remove();
    
    allDishes.forEach(function(oneDish){
      let itemName = oneDish.querySelector('.singleDishContents h3').innerText;
      if(itemName === name){
        oneDish.querySelector('.actions input').value = 0
        oneDish.querySelector('.actions button').removeAttribute('disabled');
        oneDish.querySelector('.actions button').innerText = 'Add'; 
      }
    });
}


/**************************HAMBURGER************************ */
const hamburger = document.getElementById("hamburger");
const hamburgerContainer = document.getElementById("hamburgerContainer");


const navBar = document.getElementById("nav-bar");


hamburger.addEventListener('click',() =>{
  hamburger.classList.toggle('notActive');
  navBar.classList.toggle('show');
});

