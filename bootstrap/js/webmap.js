var dsEvents=new Spry.Data.XMLDataSet("data/webmap.xml","pages/page");

            
function mOver(e){
        if(e.target.getAttribute("class")=="cells"){
            e.target.setAttribute("style","background-color:red; color:white;");
        }
    }
function mOut(e){
    if(e.target.getAttribute("class")=="cells"){
        e.target.setAttribute("style","background-color:white; color:black;");
    }
}
var autoMoving;
var slider;
var output ;
function start(){
    document.getElementById("starInt").addEventListener("click",startIncreasing,false);
    document.getElementById("stopInt").addEventListener("click",stopIncreasing,false);
    slider = document.getElementById("myRange");
    output = document.getElementById("chagingNumber");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
       changingSize();
    }
}
function changingSize(){
    output.innerHTML = slider.value;
    var elements=document.getElementsByClassName("size");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.fontSize = slider.value+"px";
    }
}
function startIncreasing(){
    autoMoving=setInterval(movingSlider,500);
}
function movingSlider(){
    if(slider.value<35){
        var position=parseInt(slider.value);
        slider.value=position+0.5;
        changingSize();
    }
    if(slider.value==35){
        clearInterval(autoMoving);
    }
} 
function stopIncreasing(){
    clearInterval(autoMoving);
}

window.addEventListener("load", start, false);
document.addEventListener("mouseover",mOver,false);
document.addEventListener("mouseout",mOut,false);    