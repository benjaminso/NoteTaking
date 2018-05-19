            //everytime the page is resized, the website must be loaded in order to get new value of sizes
            window.onresize = function(){ location.reload(); }
            var imgList=["images/pexels-photo-109255.jpeg",
									"images/pexels-photo-207658.jpeg",
									"images/pexels-photo-261880.jpeg",
									"images/pexels-photo-316466.jpeg",
									"images/pexels-photo-317356.jpeg"];
            
            
            function start(){
                var randomPic=Math.floor(Math.random()*4);
                document.getElementById("sourceImgs").setAttribute("src",imgList[randomPic]);
                // draw small box first
                drawBox();

                // aplying the javascript to those small boxes
                var getbox1=document.getElementById("box1");
                getbox1.addEventListener("mouseover",mouseOver);
                getbox1.addEventListener("mouseout",mouseOut);

                var getbox2=document.getElementById("box2");
                getbox2.addEventListener("mouseover",mouseOver2);
                getbox2.addEventListener("mouseout",mouseOut2);
                
                var getbox3=document.getElementById("box3");
                getbox3.addEventListener("mouseover",mouseOver3);
                getbox3.addEventListener("mouseout",mouseOut3);

                var getbox4=document.getElementById("box4");
                getbox4.addEventListener("mouseover",mouseOver4);
                getbox4.addEventListener("mouseout",mouseOut4);
            }
            function drawBox(){
                for(var i=1;i<5;i++){
                    var getbox=document.getElementById("box"+i);
                    var div=document.createElement("div");
                    div.setAttribute("id","div"+i+"InBox"+i)
                    div.style.width=(getbox.offsetWidth/6)+10+"px";
                    div.style.height=(getbox.offsetHeight/5)+"px";
                    div.style.zIndex="-1";
                    div.style.borderBottomLeftRadius = "10px";
                    div.style.borderBottomRightRadius="10px";
                    div.style.position="absolute";
                    div.style.textAlign="center";
                    div.style.top="0px";
                    div.style.left=(getbox.offsetWidth/4)*3+"px";
                    div.style.color="white";
                    div.style.backgroundColor="black";
                    if(i==1){
                            div.innerHTML+="Strategy I";
                    }else if(i==2){
                        div.innerHTML+="Strategy II";
                    }else if (i==3){
                        div.innerHTML+="Strategy III";
                    }else{
                        div.innerHTML+="Strategy IV";
                    }
                    getbox.appendChild(div);
                }
            }
            /*Using loop can reduce the line of code*/

            function mouseOut(){
                document.getElementById("div1InBox1").style.zIndex="-1"; 
            }
            function mouseOver(){
               document.getElementById("div1InBox1").style.zIndex="10";
            }
            function mouseOut2(){
                document.getElementById("div2InBox2").style.zIndex="-1"; 
            }
            function mouseOver2(){
               document.getElementById("div2InBox2").style.zIndex="10";
            }
            function mouseOut3(){
                document.getElementById("div3InBox3").style.zIndex="-1"; 
            }
            function mouseOver3(){
               document.getElementById("div3InBox3").style.zIndex="10";
            }
            function mouseOut4(){
                document.getElementById("div4InBox4").style.zIndex="-1"; 
            }
            function mouseOver4(){
               document.getElementById("div4InBox4").style.zIndex="10";
            }
            
            window.addEventListener("load",start,false);