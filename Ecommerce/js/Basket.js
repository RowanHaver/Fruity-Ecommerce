"use strict";

//Globals
window.onload = loadBasket;

//Get basket from session storage or create one if it does not exist
function getBasket(){
    let basket;
    if(sessionStorage.basket === undefined || sessionStorage.basket === ""){
        basket = [];
    }
    else {
        basket = JSON.parse(sessionStorage.basket);
    }
    return basket;
}

//Displays basket in page. 
function loadBasket(){
    let basket = getBasket();//Load or create basket
    
    //Build string with basket HTML
    let htmlStr = "<form action='checkout.php' method='post'>";
    let prodIDs = [];
    let totalPrice = 0;
    for(let i=0; i<basket.length; ++i){
        htmlStr += "Product name: " + basket[i].name +"--------";
        htmlStr += "Price: " + basket[i].price + "<br>";
        prodIDs.push({id: basket[i].id.$oid, count: 1});//Add to product array
        productAmount(basket.length);
        //totalPrice += basket[i].price;
        //console.log(basket[i].price);

        //totalPrice += parseint(basket[i].price); 
    }

    //Add hidden field to form that contains stringified version of product ids.
    htmlStr += "<input type='hidden' name='prodIDs' value='" + JSON.stringify(prodIDs) + "'>";
    
    //Add checkout and empty basket buttons
    htmlStr += "</form>";

    //document.getElementById('checkout_button').onclick = checkout();
    
    //Display nubmer of products in basket
    document.getElementById("loadBasket").innerHTML = htmlStr;

    document.getElementById('checkout_price').innerHTML = "£"+totalPrice;
}

//Adds an item to the basket
function addToBasket(prodID, prodName, prodPrice){
    console.log('Pressed');
    let basket = getBasket();//Load or create basket
    
    //Add product to basket
    basket.push({id: prodID, name: prodName, price: prodPrice});
    
    //Store in local storage
    sessionStorage.basket = JSON.stringify(basket);
    
    //Display basket in page.
    loadBasket();      
}

//Deletes all products from basket
let emptyBasket = () =>{
    sessionStorage.clear();
    productAmount(0);
    loadBasket();
}


let productAmount = (amount) =>{
    document.getElementById('itemAmount').innerHTML = "You have "+amount+" amount of of items in your cart";
    //itemAmount
}

//Check out
let checkout = () =>{
    console.log("Checkout");

    //Create request object
    let request = new XMLHttpRequest();

    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            emptyBasket();
            document.getElementById('message').innerHTML = "Sucessfull";
            
        }
    }

    let basket = getBasket();//Load or create basket
    
    console.log(basket);

    request.open("POST", "../Server-php/Checkout.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("orders=" + basket);


}




