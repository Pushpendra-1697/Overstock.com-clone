document.querySelector("form").addEventListener("submit",loginFunc);
let signupLS=JSON.parse(localStorage.getItem("signup"))||[];
function loginFunc(event){
    event.preventDefault();
    if(signupLS.length===0){
        alert("No user till now");
        return;
    };
    let obj={
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value
    };
    let flag=false;
    signupLS.forEach(function(ele){
        if(ele.Email===obj.Email&&ele.Password===obj.Password){
            flag=true;
            localStorage.setItem("login",JSON.stringify(ele));
            alert("successfully login");
            window.location.href="index.html";
        };
    });
    if(flag===false){
        alert("User dont't Exist");
    };
};