const mobilebtn = document.querySelector(".hamburgur");
const navmenu = document.querySelector(".for_low");
var loader = document.getElementById("preloader");
const resume = document.querySelector('.Download_me');
const resume_btn = document.querySelector('.resume');

mobilebtn.addEventListener("click", () =>{
    const visibility = navmenu.getAttribute('data-visible');
    if(visibility === "false"){
        navmenu.setAttribute('data-visible',true);
    }
    else if(visibility === "true"){
        navmenu.setAttribute('data-visible',false);
    }
    
});

function change(){
    const pres = document.querySelector(".line");
    const know = pres.getAttribute('aria-pressed');
    if(know === "true"){
        pres.setAttribute('aria-pressed',false);
        pres.style.backgroundColor = "white";   
        document.getElementById("mobilemenu").style.opacity = "1";
    }
    else {
        pres.setAttribute('aria-pressed',true);
        document.getElementById("ham").style.backgroundColor ="#FBC02D";
        document.getElementById("mobilemenu").style.opacity = "0";

        }
    };

window.addEventListener("load",function(){
    loader.style.display = "none";
});

resume.addEventListener('click',()=>{
    const visibility = resume_btn.getAttribute('data-visible');
    console.log(visibility);
    if(visibility === "false"){
        resume_btn.setAttribute('data-visible',true);
    }
    else if(visibility === "true"){
        resume_btn.setAttribute('data-visible',false);
    }
});
