let signIn = () =>{

    //Create request object
    let request = new XMLHttpRequest();


    let signinEmail = document.getElementById("").value; 
    let signupPassword = document.getElementById("").value
    console.log(searchData);

    /*if(searchData === "") {
        //console.log(RUNS);
        return false;
    }*/

    //Check HTTP status code
    /*
    request.onreadystatechange = () => {
        if(request.status === 200){
            console.log("Request "+request.responseText);
            display(request.responseText);
        }
        
      }
      */
    request.onload = () => {
        //Check HTTP status code
        if(request.status === 200){
            //Add data from server to page
            console.log("success");
            console.log(request.responseText);
            filterProducts(request.responseText);
            
        }

    }
    /*if(request.status === 0){
        //Add data from server to page
        console.log("success");
        //display(request.responseText);
        console.log(request.responseText);

    }
    else{
        alert("Error communicating with server: " + request.status);
    }*/

    //Set up request and send it 
        request.open("GET", "../Server-php/Search.php?search=" + searchData);
        request.send();

    
    
    


    //Create event handler that specifies what should happen when the server responds
    
    

}

//console.log(response);

let display = (jsonProducts) =>{
    //console.log('Before: '+jsonProducts);
    //console.log(JSON.stringify(jsonProducts));
    //console.log(JSON.parse(JSON.stringify(jsonProducts)));
    console.log(JSON.parse(jsonProducts));
    //let prod = JSON.parse("["+jsonProducts+"]");
    //console.log(prod);
}