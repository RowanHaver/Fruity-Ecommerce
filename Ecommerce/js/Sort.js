//Get elementID of dropdown ment
const dropdownMenu = document.getElementById('dropdownMenu');

//Listens to a click on the dropdown menu
dropdownMenu.addEventListener('click', (e) => {

    //Gets id of what has been clicked
    let idName = e.target.id;
    //Checks if idname is price low-high
    if(idName == 'price:l-h'){
        document.getElementById('dropdownMenuButton1').innerHTML = "price: Low-High";
        loadProducts();
    }
    //Checks if idname is price high-low
    else if(idName == 'price:h-l'){
        document.getElementById('dropdownMenuButton1').innerHTML = "price: High-Low";
        loadProducts();
    } 

})