(() => {
tv = document.querySelector("#tv");
bkgrdTv = tv.contentDocument.querySelectorAll(`.cls-7`);
text = tv.contentDocument.querySelectorAll(`.cls-9`);
search = tv.contentDocument.querySelectorAll(`.cls-11`);
icons =tv.contentDocument.querySelectorAll('.cls-8');
areas =tv.contentDocument.querySelectorAll('.cls-13');

function change(evt){
    console.log(evt.target);
    if(evt.target.classList.contains('cls-7')){
        evt.target.style.fill="#ce201f";
    }else{
    evt.target.style.fill="#000000";
    }
}

function big (){
    text[0].style.textDecoration = "underline"; 
}

    bkgrdTv[0].addEventListener("click",change);
    text[0].addEventListener("click",big);
    search[0].addEventListener("click",change);

    icons.forEach(icon => {
        icon.addEventListener("click",change);
    })
    areas.forEach(area => {
        area.addEventListener("click",change);
    })

  

})();
