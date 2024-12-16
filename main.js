var uName=prompt("ENTER YOUR USERNAME");
console.log(uName);
var pwd=prompt("ENTER YOUR PASSWORD");
console.log(pwd);

if(uName=="abcd" && pwd==1234){
    console.log("Authentication successful");
    document.getElementById("show").innerHTML="Authentication successful"+"<br>";
}
else{
    if(uName!=="abcd" && pwd==1234){
        console.log("Username is incorrect");
        document.getElementById("show").innerHTML="Usernname is incorrect"+"<br>";
    }
    else if(uName=="abcd" && pwd!==1234){
        console.log("Password is incorrect");
        document.getElementById("show").innerHTML="Password is incorrect"+"<br>";
    }
    else{
        console.log("Username and Password are incorrect");
        document.getElementById("show").innerHTML="Username and Password are incorrect"+"<br>";
    }
}

