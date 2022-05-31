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

    //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');
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

    //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');

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

  //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');

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

  //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');
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
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');

  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

  //menu
  
  mainDishes.classList.remove('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');

});

pastaDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');


  //menu
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.remove('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');


  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});


pizzaDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');


  //menu
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.remove('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');


  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});

veganDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');


  //menu
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.remove('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');


  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});

drinksDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');


  //menu
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.remove('hide');
  dessertsDishesInMenu.classList.add('hide');


  //orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.add('hide');

});

dessertsDishesButton.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  order.classList.add('hide');


  //menu
  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.remove('hide');


  //orders
  mainDishesInOrders.classList.add('hide');
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

  //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');
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

//menu

mainDishes.classList.add('hide');
pastaDishesInMenu.classList.add('hide');
pizzaDishesInMenu.classList.add('hide');
veganDishesInMenu.classList.add('hide');
drinksInMenu.classList.add('hide');
dessertsDishesInMenu.classList.add('hide');

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

//menu

mainDishes.classList.add('hide');
pastaDishesInMenu.classList.add('hide');
pizzaDishesInMenu.classList.add('hide');
veganDishesInMenu.classList.add('hide');
drinksInMenu.classList.add('hide');
dessertsDishesInMenu.classList.add('hide');

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

//menu

mainDishes.classList.add('hide');
pastaDishesInMenu.classList.add('hide');
pizzaDishesInMenu.classList.add('hide');
veganDishesInMenu.classList.add('hide');
drinksInMenu.classList.add('hide');
dessertsDishesInMenu.classList.add('hide');
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

//menu

mainDishes.classList.add('hide');
pastaDishesInMenu.classList.add('hide');
pizzaDishesInMenu.classList.add('hide');
veganDishesInMenu.classList.add('hide');
drinksInMenu.classList.add('hide');
dessertsDishesInMenu.classList.add('hide');
});


//***************************ORDERS Desserts****************


dessertsButtonInOrders.addEventListener('click',() =>{
  everythingToHide.classList.add('hide');
  subscribeContent.classList.add('hide');
  aboutUsContent.classList.add('hide');
  menuContents.classList.add('hide');
  mainDishes.classList.add('hide');
  order.classList.remove('hide');



//orders
  mainDishesInOrders.classList.add('hide');
  pastaInOrders.classList.add('hide');
  pizzaInOrders.classList.add('hide');
  veganInOrders.classList.add('hide');
  drinksInOrders.classList.add('hide');
  dessertsInOrders.classList.remove('hide');

  //menu

  mainDishes.classList.add('hide');
  pastaDishesInMenu.classList.add('hide');
  pizzaDishesInMenu.classList.add('hide');
  veganDishesInMenu.classList.add('hide');
  drinksInMenu.classList.add('hide');
  dessertsDishesInMenu.classList.add('hide');



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
      <p><div class= "dishName"><label>${name}</label><input type="hidden" name="product name">

      </div> x <label for="quantity">${quantity}</label><input type="hidden" name="quantity" id="quantity" readonly> <div class="totalNone"> <label for="price">${price}</label><input type="hidden" name="price" id="price" readonly>= $<span><label for="total">${total}</label><input type="hidden" name="product name" id="total" readonly></span></div>

      </p>
    <button onclick="removeFromCart(this)">Delete entry</button>
    </div>`;

    document.querySelector('.total').innerText = `Total: $${allTotal}`

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

    console.log(allDishes);
    
    allDishes.forEach(function(oneDish){
      let itemName = oneDish.querySelector('.singleDishContents h3').innerText;
      if(itemName === name){
        oneDish.querySelector('.actions input').value = 0
        oneDish.querySelector('.actions button').removeAttribute('disabled');
        oneDish.querySelector('.actions button').innerText = 'Add'; 
      }
    });
}

