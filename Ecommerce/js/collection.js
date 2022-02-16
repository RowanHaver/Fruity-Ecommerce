/*
aim is to check login and change href link, (replace number with check login using session id) 
if user is logged in change the href link to users page where they can edit and check there basket.
*/
number = 2;
let signinCheck = () => {
    if(number == 2){
        let a = document.getElementById("signin");
        a.href = "Sign-in.html";
    }
    //add an else if client is not logged in it will direct them to the the regular signin page

}


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
