const select_box=document.querySelector('.options');
const search_box=document.querySelector('.search-box');
const input_box=document.querySelector('.input[type="tel"]');
const selected_option=document.querySelector('maincountry');

let display_value=document.querySelector('.options').style.display="none"

function showoptions() {
   
   if(document.querySelector('.options').style.display="none"=="none"){
       document.getElementById("options").style.display="block";
       display_value=document.querySelector('.options').style.display="block"
   }
   else{
       document.getElementById("options").style.display="none";
       display_value=document.querySelector('.options').style.display="none"
   }
   
}
document.getElementById("registerhide").style.transform="scale(0)"

function opendetail(){
    if(document.getElementById("registerhide").style.transform=="scale(0)"){
        document.getElementById("registerhide").style.transform="scale(1)";
    }
    else{
        document.getElementById("registerhide").style.transform="scale(0)";
    }
}


let options=document.querySelector('.option');
document.getElementById("mainflag").style.display="inblock";
document.getElementById("flag2").style.display="inblock";
document.getElementById("flag3").style.display="inblock";
document.getElementById("flag4").style.display="inblock";
document.getElementById("flag5").style.display="inblock";
document.getElementById("flag6").style.display="inblock";

function selectOption1(){
    document.getElementById("options").style.display="none";
    document.getElementById("mainflag").style.display="inblock";
    document.getElementById("flag2").style.display="none";
    document.getElementById("flag3").style.display="none";
    document.getElementById("flag4").style.display="none";
    document.getElementById("flag5").style.display="none";
    document.getElementById("flag6").style.display="none";
    
    
}

function selectOption2(){
    document.getElementById("options").style.display="none";
    document.getElementById("mainflag").style.display="none";
    document.getElementById("flag2").style.display="inblock";
    document.getElementById("flag3").style.display="none";
    document.getElementById("flag4").style.display="none";
    document.getElementById("flag5").style.display="none";
    document.getElementById("flag6").style.display="none";
   
   
}
function selectOption3(){
    document.getElementById("flag3").style.display="inblock";
    document.getElementById("mainflag").style.display="none";
    document.getElementById("flag2").style.display="none";
    document.getElementById("flag4").style.display="none";
    document.getElementById("flag5").style.display="none";
    document.getElementById("flag6").style.display="none";
    document.getElementById("options").style.display="none"; 
}
function selectOption4(){
    document.getElementById("flag4").style.display="inblock";
    document.getElementById("options").style.display="none"; 
    document.getElementById("flag3").style.display="none";
    document.getElementById("mainflag").style.display="none";
    document.getElementById("flag2").style.display="none";
    
    document.getElementById("flag5").style.display="none";
    document.getElementById("flag6").style.display="none";
    
 }
 function selectOption5(){
    document.getElementById("flag5").style.display="inblock";
    document.getElementById("options").style.display="none";
    document.getElementById("flag3").style.display="none";
    document.getElementById("mainflag").style.display="none";
    document.getElementById("flag2").style.display="none";
    document.getElementById("flag4").style.display="none";
    
    document.getElementById("flag6").style.display="none";
      
 }
 function selectOption6(){
    document.getElementById("flag6").style.display="inblock";
    document.getElementById("options").style.display="none";
    document.getElementById("flag3").style.display="none";
    document.getElementById("mainflag").style.display="none";
    document.getElementById("flag2").style.display="none";
    document.getElementById("flag4").style.display="none";
    document.getElementById("flag5").style.display="none";
    
     
 }
//document.getElementById("options").style.display="none";