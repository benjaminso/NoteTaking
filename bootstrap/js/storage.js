function start(){
    document.getElementById("loginID").addEventListener("click",pressedButton=>{
                        window.location="loginform.html"
                        },false);
    
    document.getElementById("sigout").addEventListener("click",logoutButton=>{
                        localStorage.removeItem("name");
                        window.location.reload(true);
                    },false);
    
    // Will change this one after the project 4
    document.getElementById("changename").addEventListener("click",pressedChange=>{
                        var isValid=false;
                        do{
                            var newName=window.prompt("Enter a new Name please");
                            if(newName== null){
                                window.alert("Error!, Please Re-enter your name Please.");
                            }else{
                                localStorage.setItem("name",newName);
                                isValid=true;
                            }
                        } while(!isValid);            
                        if(isValid)
                            window.location.reload(true);
                    },false);
                    
    var name=localStorage.getItem("name");
    if(name === null){
        remove();
    }else{
        document.getElementById("namecurrent").innerHTML=name;
        removeLoginID();
    }
}

function remove(){
    var buttonSigout=document.getElementById("sigout");
    buttonSigout.parentNode.removeChild(buttonSigout);

    var labelName=document.getElementById("namecurrent");
    labelName.parentNode.removeChild(labelName);
    
    var buttonChange=document.getElementById("changename");
    buttonChange.parentNode.removeChild(buttonChange);
}
function removeLoginID(){
    var buttonLogin=document.getElementById("loginID");
    buttonLogin.parentNode.removeChild(buttonLogin);
}
window.addEventListener("load",start,false);

