function start(){	
    var regUser="";
    document.getElementById("createAccount").addEventListener("click",buttonPressed=>{
            regUser=document.getElementById("takename").value;
            if(regUser === ""){
				alert("Please enter username");
			}
                
            else{
                localStorage.setItem("name",regUser);
                window.location="index.html";
            } 
    },false);
}
window.addEventListener("load",start,false);

 