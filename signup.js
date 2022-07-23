document.querySelector("form").addEventListener("submit",signupFunc);
let signupLS=JSON.parse(localStorage.getItem("signup"))||[];
function signupFunc(event){
    event.preventDefault();
    let obj={
        Name:document.querySelector("#name").value,
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value,
    };
    if(obj.Name===""||obj.Email===""||obj.Password===""){
        alert("Empty some required field");
        return;
    }else{
        window.location.href="login.html";
    }
    signupLS.push(obj);
    localStorage.setItem("signup",JSON.stringify(signupLS));
};