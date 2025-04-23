const elem = document.querySelectorAll("nav>ul>li>label");
elem.forEach((label)=>{
    label.addEventListener("click",()=>{
        document.getElementById("check-icon").checked=false;
    })
});