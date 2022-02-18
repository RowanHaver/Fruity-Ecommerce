

let registration = () => {
    console.log("Post items link has been clicked");

    //Create request object
    let request = new XMLHttpRequest();


    /*
    not working delete request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success checkcart");
            console.log(request.responseText);
            if(request.responseText.includes("Password")){
                console.log('error made it to main page');
                
                document.getElementById('error').innerHTML = JSON.parse(request.responseText);
            }else{
                console.log('Works perfectly');
                document.getElementById('passwordError').innerHTML = '';
                
            }

            //checkStatus = true;
            
        }
        

    }*/

    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success checkcart");
            if(request.responseText.includes("Email has been used")){
                document.getElementById('emailError').innerHTML = JSON.parse(request.responseText);
            }else{
                console.log(request.responseText);
                document.getElementById('error').innerHTML = 'works';
            }
        }
        

    }

    let regEmail = document.getElementById("email").value;
    let regTelephone = document.getElementById("telephone").value;
    let regAddress = document.getElementById("address").value;
    let regPassword = document.getElementById("password").value;
    let regConfirmPassword = document.getElementById("confirmPassword").value;




    /*let regEmail = document.getElementById("email").value;
    let regTelephone = document.getElementById("telephone").value;
    let regAddress = document.getElementById("address").value;
    let regPassword = document.getElementById("password").value;
    let regConfirmPassword = document.getElementById("confirmPassword").value;
    */

    if(validateInput(regEmail,regPassword,regConfirmPassword)){
        request.open("POST", "../Server-php/Registration.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("email=" + regEmail + "&telephone=" + regTelephone + "&address=" + regAddress + "&password=" + regPassword + "&confirmPassword=" + regConfirmPassword);
    }
    else{
        console.log("Not working");
    }

}

/*
let regEmail = document.getElementById("email").value;
let regTelephone = document.getElementById("telephone").value;
let regAddress = document.getElementById("address").value;
let regPassword = document.getElementById("password").value;
let regConfirmPassword = document.getElementById("confirmPassword").value;
*/


let validateInput = (regEmail,regPassword,regConfirmPassword) =>{

    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    //count
    count = 0;
    // checks if password is past 8 charcters
    if (regPassword < 8) {
        //print error to user
        document.getElementById("passwordError").innerHTML += "<br>" + "password must be atleast 8 characters";
        //increase count
        count++;
    }
    // checks if password contains lowercase
    if (regPassword.search(/[a-z]/) < 0) {
        //print error to user
        document.getElementById("passwordError").innerHTML += "<br>" + "password must contain at least one lowercase letter.";
        count++;
    }
    // checks if password contains upper case
    if (regPassword.search(/[A-Z]/) < 0) {
        //print error to user
        document.getElementById("passwordError").innerHTML += "<br>" + "password must contain at least one uppercase letter.";
        count++;
    }
    // checks if password contains digits
    if (regPassword.search(/[0-9]/) < 0) {
        //print error to user
        document.getElementById("passwordError").innerHTML += "<br>" + "password must contain at least one digit.";
        count++;
    }
    // checks if password contains specific special charcters
    if (regPassword.search(/[!@#$%^&*]/) < 0) {
        //print error to user
        document.getElementById("passwordError").innerHTML += "<br>" + "password must contain one of these !@#$%^&* .";
        count++;
    }
    //check if passwords are matching
    if(regPassword !== regConfirmPassword){
        //print error to user
        document.getElementById("passwordError").innerHTML = "Passwords do not match";
        count++
    }

    //validate email
    if(regEmail.search(/(.+)@(.+){2,}\.(.+){2,}/) < 0 ){
        //print error to user
        document.getElementById("emailError").innerHTML += "Email not in the correct format";
        count++;
    } 

    if (count > 0) {
        
        return false;
    }else{
        return true;
    }

}




function validateInputnotworking() {
    //gets value
    document.getElementById("passwordResult").innerHTML = "";
    document.getElementById("emailResult").innerHTML = "";
    document.getElementById("usernameResult").innerHTML = "";
    document.getElementById("passwordMatch").innerHTML = "";

    //count
    count = 0;
    // checks if password is past 8 charcters
    if (userObject.password.length < 8) {
        //print error to user
        document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must be at least 8 characters";
        //increase count
        count++;
    }
    // checks if password contains lowercase
    if (userObject.password.search(/[a-z]/) < 0) {
        //print error to user
        document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one lowercase letter.";
        count++;
    }
    // checks if password contains upper case
    if (userObject.password.search(/[A-Z]/) < 0) {
        //print error to user
        document.getElementById("passwordResult").innerHTML += "<br>" + "Your password must contain at least one uppercase letter.";
        count++;
    }
    // checks if password contains digits
    if (userObject.password.search(/[0-9]/) < 0) {
        //print error to user
        document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one digit.";
        count++;
    }
    // checks if password contains specific special charcters
    if (userObject.password.search(/[!@#$%^&*]/) < 0) {
        //print error to user
        document.getElementById("passwordResult").innerHTML += "<br>" + " Your password must contain at least one of these special character !@#$%^&* .";
        count++;
    }
    //check if passwords are matching
    if(userObject.password !== userObject.confirmPassword){
        //print error to user
        document.getElementById("passwordMatch").innerHTML = "Passwords do not match";
        count++
    }

    //validate email
    if(userObject.email.search(/(.+)@(.+){2,}\.(.+){2,}/) < 0 ){
        //print error to user
        document.getElementById("emailResult").innerHTML += "Email not in the correct format";
        count++;
    } 
    //check if email has been created
    let email = localStorage.getItem(userObject.email);
    if(email){
        //print error to user
        document.getElementById("emailResult").innerHTML += "Account already created with this email, try again";
        count++
    }

    //check if username is empty
    if(userObject.username == ""){
        //print error to user
        document.getElementById("usernameResult").innerHTML += "Enter username";
        count++
    }

    if (count > 0) {
        
        return false;
    }
    return true;
}   