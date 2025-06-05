

//창 사이즈 별 js 파일 가져오기
let currentScript = ''; // 전역에서 추적할 스크립트 종류

const checkDevice = () => {
    const device = window.innerWidth <= 768 ? "mobile" : "pc";
  // 이미 동일한 스크립트를 불러온 경우 재로드 방지
    if (currentScript === device) {
    return;
    }
    //이전 스크립트 제거
    const $prev = document.querySelector(`script[data-script]`);
    if( $prev ){
        $prev.remove();
        location.reload();
    } 
    const script = document.createElement("script");
    script.src = `./script/${device}.js`;
    script.setAttribute("data-script", "true");
    document.body.appendChild(script);
    currentScript = device;
};

window.addEventListener("load", () => {
    checkDevice();
    gsap.registerPlugin(ScrollTrigger);
});

window.addEventListener("resize", () => {
    checkDevice();
});