gsap.registerPlugin(ScrollTrigger);

//header 영역의 title이 오른쪽에 왼쪽으로 이동
const $headerMsg = document.querySelectorAll("header .title li");
gsap.from($headerMsg,{
  x: 300,
  opacity: 0,
  duration: 1,
  stagger: 0.5
});
//화살표가 위에서 아래로 이동, 1번화살표 실행 후 2번화살표 실행
gsap.set(".arrow > p",{y:0});
const tl = gsap.timeline({repeat:-1});
tl.to(".arrow > p",{
  y:10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out"
})
.to(".arrow > p",{
  y:20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out"
});

//h1태그는 scale이 변경, bounce.out 처리
gsap.from("header>h1",{
  scale:0.7,
  opacity:0,
  duration: 1,
  ease: "bounce.out"
});

//about 영역을 가로로 스크롤 되게 처리
const $aboutWrap = document.querySelector("#about>.about-wrap");
const scrollWidth = $aboutWrap.scrollWidth - window.innerWidth;
const horizonScroll = gsap.to($aboutWrap,{
  x: -scrollWidth,
  duration: 1,
  scrollTrigger: {
    trigger:"#about",
    start: "top top",
    end: "+="+scrollWidth,
    pin: true,
    scrub: true
  }
});

//about info 에 있는 p태그들은 오른쪽에서 왼쪽으로 이동
const $aboutMsg = document.querySelectorAll("#about .info p");
$aboutMsg.forEach((msg)=>{
  gsap.from(msg,{
    x:200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: msg,
      containerAnimation: horizonScroll,   //꼭! 필수 가로스크롤일경우
      start: "left 90%",
      toggleActions: "play reverse play reverse"
    }
  });
});

//keyword 부분이 가로로 왔다가 갔다 실행
const $keywordList = document.querySelectorAll(".keyword>li");
$keywordList.forEach((elem,idx)=>{
  const posX = (idx===1)? 50 : -50;
  gsap.fromTo(elem,{
    x:posX
  },{
    x:-posX,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "none"
  });
});

//project 이동 gsap 애니
const fromTop = (elem,posY)=>{
  gsap.from(elem,{
    y:200,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: elem,
      start: `top ${posY}%`,
      end: "top 25%",
      scrub: true
    }
  })
}
// project 안에 card item을 계단 형식으로 애니처리 됨
const $project = document.querySelectorAll("#projects>.normal");
$project.forEach((article)=>{
  const $item = article.querySelectorAll(".item");
  $item.forEach((item,idx)=>{
    let posY = 90 - idx*15;
    fromTop(item,posY);
  });
});

//practice project 영역은 계단식 애니메이션 처리
const $practice = document.querySelectorAll("#projects > .practice .item");
$practice.forEach((item,idx)=>{
  let posY = 70 - idx*2;
  fromTop(item,posY);
})

//Skills&tools 작아지면서 안보이게
const $skillsTool = document.querySelector("#skills > h2");
gsap.to($skillsTool,{
  opacity: 0,
  scale: 0.5,
  duration: 2,
  scrollTrigger:{
    trigger: "#skills",
    start: "top 70%",
    toggleActions: "play reverse play reverse"
  }
})

//skills에서 li들은 작아진 상태에서 커지게 : stagger
const $shape = document.querySelectorAll(".skill-item > li");
gsap.from($shape,{
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
  stagger: 0.2,
  ease: "back.out",
  scrollTrigger:{
    trigger: "#skills",
    start: "top 50%",
    toggleActions: "play reverse play reverse"
  }
})

//footer 애니메이션 효과
const $footer = document.querySelectorAll(".text > *");
gsap.from($footer,{
  scale: 1.3,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger:{
    trigger: "footer",
    start: "top 20%",
    toggleActions: "play reverse play reverse"
  }
})

//home을 누르면 제일 위로 올라가기
const $home = document.querySelector("#logo");

$home.addEventListener("click",()=>{
  window.scrollTo({
    top: 0
  });
})