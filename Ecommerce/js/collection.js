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


const pricelh = document.getElementById('price:l-h');
const pricehl = document.getElementById('price:h-l');

pricelh.addEventListener('click', () => {
    let dropdownName = document.getElementById('dropdownMenuButton1').innerHTML = "price: Low-High";
})

pricehl.addEventListener('click', () => {
    let dropdownName = document.getElementById('dropdownMenuButton1').innerHTML = "price: High-Low";
})


