

let registration = () => {
    console.log("Post items link has been clicked");

    //Create request object
    let request = new XMLHttpRequest();


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


    if(validateInput(regEmail,regPassword,regConfirmPassword)){
        request.open("POST", "../Server-php/Registration.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("email=" + regEmail + "&telephone=" + regTelephone + "&address=" + regAddress + "&password=" + regPassword + "&confirmPassword=" + regConfirmPassword);
    }
    else{
        console.log("Not working");
    }

}



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


