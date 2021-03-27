let email=document.getElementById("email");
let password=document.getElementById("password");
let reg= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
// let exp=/^(([[A-Z]+)([a-z]+)([0-9]+){8,})$/;
// let exp=/^([A-Z]+)([a-z]+)([0-9]+)$/;
let exp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// let phn11=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let phn1=/^([0-9]{10})$/
let phn2=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
let phn3=/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/
let phn4=/^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/
let error=document.getElementById("error");
let pass=document.getElementById("pass");
let close1=document.getElementById("close1");
let ch1=document.getElementById("ch1");
let ch2=document.getElementById("ch2");
let ch3=document.getElementById("ch3");
let ch4=document.getElementById("ch4");
let repassword=document.getElementById("repassword");
let phn=document.getElementById("phn");
let hide=document.getElementById("hide");
// let allphn=phn1.test(phn.value)||phn2.test(phn.value)||phn3.test(phn.value)||phn4.test(phn.value);


function validemail()
{
    if(reg.test(email.value))
    {
        email.style.border="5px solid green";
    }
    else
    {
        email.style.border="5px solid red";
    } 
} 
function validpass()
{
    if(exp.test(password.value))
    {
        password.style.border="5px solid green";
    }
    else
    {
        password.style.border="5px solid red";
    }

    var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) 
  {  
    
    ch1.classList.remove("invalid");
    ch1.classList.add("valid");
  }
   else 
  {
    ch1.classList.remove("valid");
    ch1.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    ch2.classList.remove("invalid");
    ch2.classList.add("valid");
  } else {
    ch2.classList.remove("valid");
    ch2.classList.add("invalid");
  }

  
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    ch3.classList.remove("invalid");
    ch3.classList.add("valid");
  } else {
    ch3.classList.remove("valid");
    ch3.classList.add("invalid");
  }
  
 
  if(password.value.length >= 8) {
    ch4.classList.remove("invalid");
    ch4.classList.add("valid");
  } else {
    ch4.classList.remove("valid");
    ch4.classList.add("invalid");
  }
  // if(exppass.test(password.value))
  // {
  //   password.style.backgroundColor="black";
  // }
  if((password.value.length>=8) && (password.value.length<=10)&&(exp.test(password.value)))
  {
    password.style.backgroundColor="rgb( 202 , 24 , 24 , 0.5 )";
  }
  else if((password.value.length>=11)&&(password.value.length<=15)&&(exp.test(password.value)))
  {
    password.style.backgroundColor="rgb(243, 225, 60,0.5)";
  }
  else if((password.value.length>=16)&&(exp.test(password.value)))
  {
    password.style.backgroundColor="rgb(118, 243, 60, 0.5)";
  }
  else
  {
    password.style.backgroundColor="white";
  }
}
function submit1()
{
    if((exp.test(password.value))&&(reg.test(email.value)&&(phn1.test(phn.value))||phn2.test(phn.value)||phn3.test(phn.value)||phn4.test(phn.value))&&(password.value===(repassword.value)))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function pass1()
{
    pass.style.display="block";
}
function closeing()
{
    pass.style.display="none";
}
function repass()
{
    if(password.value.match(repassword.value))
    {
        repassword.style.border="5px solid green";
    }
    else
    {
        repassword.style.border="5px solid red";
    }
}
function validphn()
{
    if(phn1.test(phn.value)||phn2.test(phn.value)||phn3.test(phn.value)||phn4.test(phn.value))
    {
        phn.style.border="5px solid green";
    }
    else
    {
        phn.style.border="5px solid red";
    }
}
function hidepass()
{
  password.removeAttribute("type","password");
  password.setAttribute("type","text");
  hide.removeAttribute("src","https://cdn1.iconfinder.com/data/icons/hawcons/32/699369-icon-22-eye-512.png");
  hide.setAttribute("src","https://icons-for-free.com/iconfiles/png/512/hidden+icon-1320183614047893754.png");
  // password.removeAttribute("type","text");
  // password.setAttribute("type","password");
}
function openpass()
{
  hide.removeAttribute("src","https://icons-for-free.com/iconfiles/png/512/hidden+icon-1320183614047893754.png");
  hide.setAttribute("src","https://cdn1.iconfinder.com/data/icons/hawcons/32/699369-icon-22-eye-512.png");
  password.removeAttribute("type","text");
  password.setAttribute("type","password");
}