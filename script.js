// Admission Button

function submitAdmission(){

    alert(
        "Your Admission Application Has Been Submitted Successfully!"
    );

}

// Page Load Message

window.onload = function () {

    console.log("Osama Zafhar Shaheed Model School Website Loaded");

};
function checkResult(){

let roll =
document.getElementById("rollNumber").value;

if(roll==""){

alert("Please Enter Roll Number");

return;

}

document.getElementById("resultCard").style.display="block";

document.getElementById("rno").innerHTML=roll;

document.getElementById("name").innerHTML="Ahmed Ali";

document.getElementById("class").innerHTML="10th";

document.getElementById("marks").innerHTML="980 / 1100";

document.getElementById("grade").innerHTML="A+";

document.getElementById("status").innerHTML="PASS";

}

function applyNow(){
    window.location.href = "admissions.html";
}

function checkResult(){
    let roll = document.getElementById("rollNumber").value;

    if(roll === ""){
        alert("Please Enter Roll Number");
    } else {
        alert("Result for Roll Number " + roll + " will be shown soon.");
    }
}

function sendMessage(){
    alert("Message Sent Successfully!");
}
let topButton =
document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 200 ||
document.documentElement.scrollTop > 200){

topButton.style.display = "block";

}
else{

topButton.style.display = "none";

}

};

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
/* Open Sidebar */

function openMenu(){

document.getElementById("sidebar").style.width="300px";

}

/* Close Sidebar */

function closeMenu(){

document.getElementById("sidebar").style.width="0";

}
function openMenu(){

document.getElementById("sidebar").style.width="250px";

}

function closeMenu(){

document.getElementById("sidebar").style.width="0";

}
/* ========================= */
/* Mouse Parallax Effect */
/* ========================= */

const hero = document.querySelector(".hero");

const heroImage = document.querySelector(".hero-right img");

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

heroImage.style.transform="translate(0,0)";

});
