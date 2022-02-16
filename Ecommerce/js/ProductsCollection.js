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

