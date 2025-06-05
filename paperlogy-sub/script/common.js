gsap.registerPlugin(ScrollTrigger);

//창 사이즈 별 js 파일 가져오기
const checkDevice = ()=>{
    const device = window.innerWidth <= 768 ? "mobile" : "pc";
    const script = document.createElement("script");
    script.src = `./script/${device}.js`;
    document.body.appendChild(script);
}

window.addEventListener("load",()=>{
    checkDevice();
});
// window.addEventListener("resize",()=>{
//     checkDevice();
// })