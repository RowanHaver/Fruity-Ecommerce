
let displayNavigation = () =>{

    let navstr = "";
    
    navstr += "<nav class='navbar navbar-expand-lg navbar-light bg-light'>";
    navstr += "<div class='container-fluid'> ";
    //Nav start
    navstr += "<div class='navbar-nav fourth_nav_menu'>";
    navstr += "<a class='nav-link ' href='PLP.html'>Home</a>";
    navstr += "<a class='nav-link' /*aria-current='page'*/ href='Store.html'>Store</a>";
    navstr += "</div>";
    //Nav title
    navstr += "<div class='navbar_title navbar-brand ' href='#'>Fruity</div>  ";
    //Nav end
    navstr += "<div class='ml-auto'> ";
    navstr += "<div class='fourth_nav_menu' >";
    //Form
    navstr += "<form class='d-flex' >";
        //Input
        navstr += "<input class='form-control form-control-sm' id='searchInfo' name='search' type='text' placeholder='Search' aria-label='Search'>";
        //Button icon
        navstr += "<button class='btn btn-sm'  type='button' id='searchBtn' onclick='searchRequest()'><i class='bi bi-search' style='font-size: 1.55rem;'></i></button>";
    navstr += "</form>";
    //Icons
    navstr += " <a href='Cart.html'><i class='bi bi-bag icons navbar_bag_icon' ></i></a>";
    navstr += "<a id='signin' onclick='signinCheck()' href=''><i class='bi bi-person icons navbar_person_icon' ></i></a>";
    navstr += "</div> </div> </div> </nav>";

    document.getElementById("navigation").innerHTML = navstr;
    
}

window.onload = displayNavigation();


let searchRequest = () =>{
    console.log("Clicked");

    //Create request object
    let request = new XMLHttpRequest();


    let searchData = document.getElementById("searchInfo").value; 
    console.log(searchData);       

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
            displayProducts(request.responseText);
            
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



