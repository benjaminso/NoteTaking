var dsEvents=new Spry.Data.JSONDataSet("data/references.json",{path:"references.reference"});
function start(){
     document.getElementById("modified").innerHTML=document.lastModified;
 }

 window.addEventListener("load",start,false);