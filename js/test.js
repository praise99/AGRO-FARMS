document.querySelector(".btn").addEventListener("click",lastname)
function lastname(){
    var img3=document.querySelector(".img-err");
    var inputtext3=document.querySelector(".sign-input").value;
    var text3=document.querySelector(".error");

    if(inputtext3 ===""){
        text3.classList.add("error-b")
        img3.classList.add("img-b")
        return true;
    }else{
        text3.classList.remove("error-b")
        img3.classList.remove("img-b")
        return false;
    }
}

document.querySelector(".btn").addEventListener("click",ValidateEmail)
function ValidateEmail(inputtext) {
    var img=document.querySelector(".img-err2");
    var inputtext=document.querySelector(".sign-input2").value;
    var text=document.querySelector(".error2");
    
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputtext.match(mailformat)){
        text.classList.remove("error2-b")
        img.classList.remove("img2-b")
        return true;
    }else{
       text.classList.add("error2-b")
        img.classList.add("img2-b")
        return false;
    };
}
document.querySelector(".btn").addEventListener("click",password)
function password(){
    var non=document.querySelector(".sign-img")
    var img4=document.querySelector(".img-err3");
    var inputtext4=document.querySelector(".sign-input3").value;
    var text4=document.querySelector(".error3");
     var full=Number(inputtext4.length)
    if(inputtext4 ==="" || full<8){
        text4.classList.add("error3-b")
        img4.classList.add("img3-b")
        non.classList.add("none")
        return true;
    }else{
        text4.classList.remove("error3-b")
        img4.classList.remove("img3-b")
        non.classList.remove("none")
        return false;
    }
}