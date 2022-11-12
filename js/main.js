let ratesButtons=document.querySelectorAll("#rates>span");
let starnumber=0;

for(let i=0;i<ratesButtons.length;i++){
    ratesButtons[i].addEventListener("click",()=>{
        starnumber=ratesButtons[i].innerHTML;
        ratesButtons[i].classList.add("tst");
        //ratesButtons[i].style.background="orangered";
    });
    ratesButtons[i].addEventListener("keyup",()=>{
        alert("key up");
    });
}


function submitRates(){
    if(starnumber==0){
        return alert("you sould at list choice a number");
    }
    let rtngResult=document.querySelector("#rating-result>p>i");
    document.getElementById("ratingCard").style.display="none";
    document.getElementById("thanksCard").style.display="flex";
    rtngResult.innerHTML=starnumber;
}