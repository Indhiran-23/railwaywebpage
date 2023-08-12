
document.getElementById("wrappers").style.transform ="scale(0)";

function log(){
    if(document.getElementById("wrappers").style.transform == "scale(0)"){
        document.getElementById("wrappers").style.transform="scale(1)";
    }
    else{
        document.getElementById("wrappers").style.transform="scale(0)";
    }
}

function cls(){
    
    document.getElementById("wrappers").style.transform="scale(0)";
}





/*const wrappers = document.querySelector("wrappers");
const btnPoupup = document.querySelector("hdlgbtn");

btnPoupup.addEventListener('click', ()=> {
    wrappers.classList.toggle('active');
    
});


*/