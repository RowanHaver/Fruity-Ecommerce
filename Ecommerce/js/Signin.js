
let signIn = () => {
    console.log("Post items link has been clicked");

    //Create request object
    let request = new XMLHttpRequest();

    let signinEmail = document.getElementById("email").value; 
    let signinPassword = document.getElementById("password").value;


    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success checkcart");
            if(request.responseText.includes('Email or Password is incorrect')){
                document.getElementById('message').innerHTML = 'Email or Password is incorrect';
            }else if(request.responseText.includes('Logged in')){
                document.getElementById('message').innerHTML = 'Logged in';
            }
        }
        

    }

    request.open("POST", "../Server-php/SignIn.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("email=" + signinEmail + "&password=" + signinPassword);

}





