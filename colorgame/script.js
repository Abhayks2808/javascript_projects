var numsquares=6;
var colors=generaterandomcolors(numsquares);
var squares=document.querySelectorAll(".item");
var colormessage=document.querySelector("#colordisplay");
var header=document.querySelector(".header");
var messagedisplay=document.querySelector("#messagedisplay");
var EasyMode=document.querySelector(".easybutton");
var HardMode=document.querySelector(".Hardbutton");
var pickedcolor=pickcolor();
clicklistener();

EasyMode.addEventListener("click",function(){
    resetbutton.textContent="New colors";
    header.style.backgroundColor="skyblue";
    messagedisplay.textContent="";
    EasyMode.classList.add("selected");
    Hardbutton.classList.remove("selected");
    numsquares=3;
    //generate new colors
    colors=generaterandomcolors(numsquares);
    console.log(colors)
    //pick new color
    pickedcolor=pickcolor();
    console.log(pickedcolor)
    
    colormessage.textContent=pickedcolor;
    //add to squares
    for(var i=0;i < squares.length;i++){
         if(i<colors.length){
                squares[i].style.background=colors[i];  
               
            }   
    else{
       squares[i].style.display="none";
    }
    clicklistener();
    }
})
var Hardbutton=document.querySelector(".hardbutton");
Hardbutton.addEventListener("click",function(){
    resetbutton.textContent="New colors";
    header.style.backgroundColor="skyblue";
    messagedisplay.textContent="";
    Hardbutton.classList.add("selected");
    EasyMode.classList.remove("selected");
    //generate new colors
    numsquares=6;
    colors=generaterandomcolors(numsquares);
    console.log(colors)
    //pick new color
    pickedcolor=pickcolor();
    console.log(pickedcolor)
    
    colormessage.textContent=pickedcolor;
    //add to squares
    for(var i=0;i < squares.length;i++){
        
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
clicklistener();
}
})
var resetbutton=document.querySelector(".Newcolor");

resetbutton.addEventListener("click",function(){
    resetbutton.textContent="New colors";
    header.style.backgroundColor="skyblue";
    messagedisplay.textContent="";
    //generate new colors
    colors=generaterandomcolors(numsquares);
    console.log(colors)
    //pick new color
    pickedcolor=pickcolor();
    console.log(pickedcolor)
    
    colormessage.textContent=pickedcolor;
    //add to squares
    for(var i=0;i < squares.length;i++){
         
                squares[i].style.background=colors[i];
                clicklistener();     
    }
})

colormessage.textContent=pickedcolor;
//loop througth the square and add colors to square
   function clicklistener(){
         for(var i=0;i < squares.length;i++){
        squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if(clickedcolor===pickedcolor){
           changecolor(pickedcolor); 
           messagedisplay.textContent="correct";
           header.style.backgroundColor=pickedcolor;
           resetbutton.textContent="play Again?";
        }
        else{
            messagedisplay.textContent="Try Again?";
            this.style.backgroundColor="#232323";
        }
    })
}
       }
   
function changecolor(color){
    //loop through each square
    for(var i=0;i < squares.length;i++){
     squares[i].style.background=color;
    }
   
}
function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generaterandomcolors(num){
var arr=[];
for (var i=0; i < num; i++ ){
    arr.push(randomcolors());
}
return arr;
}
function randomcolors(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
   return "rgb("+ r +", "+ g +", " + b +")";
}