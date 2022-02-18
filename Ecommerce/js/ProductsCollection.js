//let request = new XMLHttpRequest();

let loadProducts = () => {

    //Create request object
    let request = new XMLHttpRequest();

    //Create event handler that specifies what should happen when the server responds
    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success");
            //displayProducts(request.responseText);
            filterProducts(request.responseText);
            

        }
        else{
            alert("Error communicating with server: " + request.status);
        }

    }


    //Set up request and send it 
    request.open("GET", "../Server-php/Products-Display.php");

    request.send();
    //console.log(productsList);

    /*return productsList*/

}

window.onload = loadProducts();

//let jsonProds = request.responseText;


//Loads products into page
let displayProducts = (/*jsonProducts*/ prodArray) => {
    //Convert JSON to array of product objects
    //console.log('before: '+jsonProducts);
    //let prodArray = JSON.parse(jsonProducts);
    //console.log(prodArray);


    //Create HTML product card containing product data
    let htmlstr = "";
    
     
    for(let i = 0; i < prodArray.length; i++){
        htmlstr +="<div class='product_card'>";
        htmlstr += "<img class='product_card_img' src=''> \n";
        htmlstr += "<div class='product_card_title' > "+ prodArray[i].name +"</div> ";
        htmlstr += "<div class='product_card_price'> £" + prodArray[i].price + " </div> ";
        htmlstr += "<div id='product_card_id' style='display: none;'>"+ prodArray[i]._id +"</div>";
        //htmlstr += "<button class='product_card_add' onclick=addToBasket('" + prodArray[i]._id/*$document["_id"] */+ ", " + prodArray[i].name/*$document["name"]*/ + "')>Add to cart</button> ";
        //htmlstr += `<button class='product_card_add' onclick='addToBasket\(${prodArray[i]._id.$oid} ,${prodArray[i].name})'>Add to cart</button> `;
        htmlstr += "<button class='product_card_add' id='product_button' onclick='addToBasket("+JSON.stringify(prodArray[i]._id)+","+JSON.stringify(prodArray[i].name)+","+JSON.stringify(prodArray[i].price)+")'>Add to cart</button>";
        console.log(prodArray[i]._id);
        htmlstr += "</div>\n";

        console.log("Works");
        console.log(prodArray[i].name);
        /*console.log(htmlstr);*/
        
     
    }
    
    console.log(htmlstr);
    
    
    document.getElementById("products-list1").innerHTML = htmlstr;
}



//Filter products
let filterProducts = (jsonProducts) => {
    let idValue = document.getElementById('dropdownMenuButton1').innerHTML;
    console.log(idValue);

    console.log('before: '+jsonProducts);
    let prodArray = JSON.parse(jsonProducts);
    console.log(prodArray);
    if(idValue == "price: Low-High"){
        console.log("Price low to high");
        
        //let arrayName = prodArray.name;

        var sortedProducts = prodArray.sort(({price:a}, {price:b}) => a-b);
        console.log(sortedProducts);
        displayProducts(sortedProducts);

    }
    else if(idValue == "price: High-Low"){
        console.log("Price high to low");

        var sortedProducts = prodArray.sort(({price:a}, {price:b}) => b-a);
        console.log(sortedProducts);
        displayProducts(sortedProducts);
    }
    else{
        console.log('before: '+jsonProducts);
        let prodArray = JSON.parse(jsonProducts);
        console.log(prodArray);

        displayProducts(prodArray);
    }

}



//Check users cart
let checkCart = (_callback) => {

    console.log("checking cart id now");

    //Create request object
    let request = new XMLHttpRequest();


    //let searchData = document.getElementById("searchInfo").value; 
    //console.log(searchData);       

    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success checkcart");
            console.log(request.responseText);
            //checkStatus = true;
            _callback();
        }
        /*else{
            checkStatus = false;
        }*/
        

    }

    //Set up request and send it 
    //change 13 to cookies of user
    //Extract cookie variable email and query
    
    //check if there is a sessionID (maybe using if array key exists)
    if(1+1 == 2){
        //customerID = sessionID.email
        request.open("GET", "../Server-php/checkCart.php?customerID=" + 13);
        request.send();
    }
    else{
        //checkStatus = false;
    }

    

}
let checkStatus = false;

//Add product gets clicked, adds to cart
let addProducts = () => {
    console.log("Add product has been clicked");
    
    checkCart(()=>{  
        console.log("Add products works!");



        //is probably unnecessary due to checkcart already checking if its correct, could probably remove all the check status
        /*if(checkStatus){
            
        }
        else{
            console.log("Check status is false");
        }*/
    })

    //checkCart();
    //Check if user connection is successfull

}

let postItems = () =>{

    console.log("Post items link has been clicked");

    //Create request object
    let request = new XMLHttpRequest();


    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success checkcart");
            console.log(request.responseText);
            //checkStatus = true;
            
        }
        

    }

    request.open("POST", "../Server-php/checkCart.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //delete later -> check what the user has clicked possibly using (let idName = e.target.id;)
    //get id of products list
    let productListID = document.getElementById('products-list1');
    

    //Listens to a click on the dropdown menu
    productListID.addEventListener('click', (e) => {

        //Gets id of what has been clicked
        let idName = e.target.id;

        //Checks if idname is price low-high
        request.send("");

    })
    
}
