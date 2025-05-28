//객체 가져오기
const $slider = document.querySelector("#slider");
const $banner = document.querySelectorAll(".banner>li");
const $btnWrap = document.querySelector(".btn-wrap");
const $slides = document.querySelectorAll("#slider>div")
console.log($slides);
const $auto = document.querySelector(".auto");
const $stop = document.querySelector(".stop");

//앞뒤로 같은 슬라이드 추가하기
const firstClone = $slides[0].cloneNode(true);
$slider.appendChild(firstClone);
const lastClone = $slides[$slides.length-1].cloneNode(true);
$slider.insertBefore(lastClone,$slider.firstChild);

//변수설정
const imgWidth = 1000; //단위 픽셀
let current = 1; //앞에 마지막 추가 후 1로 변경예정
const maxLength = $slides.length;
let intervalID = null;

//초기설정값
gsap.set("#slider",{x:-(imgWidth)*current});

//실험용 다음버튼클릭시 이동
const clickNextBtn = ()=>{
    // if(current < 5){
    //     current++;
    // } else {
    //     current = 0
    // }
    current++;
    gsap.to("#slider",{
        x:-(imgWidth)*current,
        duration: 2,
        onComplete: ()=>{
            if(current >= maxLength){
                current = 0;
                gsap.set("#slider",{x:(imgWidth)*current});
            }
        }
    });
}

//.bolder class 삭제 및 추가
const menuClass = ()=>{
    $banner.forEach((value)=>{
        value.classList.remove("bolder");
    });
    $banner[current-1].classList.add("bolder");
}

//자동버튼
$auto.addEventListener("click",()=>{
    intervalID = setInterval(()=>{
        clickNextBtn();
        menuClass();
    },4000);
    $auto.disabled = true;
})

//정지버튼
$stop.addEventListener("click",()=>{
    if(intervalID){
        console.log("clearstop");
        clearInterval(intervalID);
        intervalID = null;
        $auto.disabled = false;
    }
})

//배너에 마우스
$banner.forEach((value)=>{
    value.addEventListener("mouseenter",()=>{
        $stop.click();
        current = Number(value.dataset.num);
        gsap.to("#slider",{
            x:-(imgWidth)*current,
            duration: 0
        });
        menuClass();
    })
})
// $banner.forEach((value)=>{
//     value.addEventListener("mouseout",()=>{
//         $auto.click();
//     })
// })