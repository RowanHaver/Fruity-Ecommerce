

let loadProducts = () => {

    //Create request object
    let request = new XMLHttpRequest();

    //Create event handler that specifies what should happen when the server responds
    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success");
            displayProducts(request.responseText);

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


//Loads products into page
let displayProducts = (jsonProducts) => {
    //Convert JSON to array of product objects
    console.log('before: '+jsonProducts);
    let prodArray = JSON.parse(jsonProducts);
    console.log(prodArray);


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

