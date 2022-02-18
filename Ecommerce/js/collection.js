
let signinCheck = () => {

    let request = new XMLHttpRequest();

    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success session check");
            if(request.responseText == "ok"){
                window.location.replace("../html/User.html");
                document.getElementById("signin").href = "../html/User.html";
                console.log("There is a sessionID");
            }
            else{
                window.location.replace("../html/Sign-in.html");
                document.getElementById("signin").href = "../html/Sign-in.html";
                console.log("There isnt");
            }
            
        }

    }
    

    request.open("GET", "../Server-php/CheckSessionID.php");
    request.send();



    //add an else if client is not logged in it will direct them to the the regular signin page

}

let logout = () => {

    let request = new XMLHttpRequest();

    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            
            if(request.responseText == "ok"){
                window.location.replace("../html/Sign-in.html");
                document.getElementById("signin").href = "../html/Sign-inhtml";
                console.log("There is a sessionID");
            }
            
        }

    }
    

    request.open("GET", "../Server-php/logout.php");
    request.send();
}
