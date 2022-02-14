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

