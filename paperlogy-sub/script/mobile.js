

//header
const $title = document.querySelectorAll(".title > li");
gsap.from($title,{
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    scrub: true
})

//화살표가 위에서 아래로 이동, 1번 화살표 실행되면서 2번 화살표 실행
const tl1 = gsap.timeline({repeat: -1});
tl1.to(".arrow > p",{
    y: 10,
    opacity: 1,
    stagger: 0.2,
    duration: 0.2,
    ease: "power2.out"
})
.to(".arrow > p",{
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2
},"-=0.1")

//내가 만든것
// gsap.fromTo(".arrow > p",{
//     y: 0,
//     opacity: 0,
// },{
//     y: 50,
//     opacity: 1,
//     duration: 1,
//     ease: "steps(3)",
//     repeat: -1,
//     stagger: 0.1
// })

//aboutme 에 들어가는 텍스트들
//사이즈가 작았다가 해당 항목이 보이면 커지면서 보이도록
const $aboutMsg = document.querySelectorAll(".about-wrap > .info > p");
$aboutMsg.forEach((msg)=>{
    gsap.from(msg,{
        scale: 0.4,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: msg,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        }
    })
})

//keyword 왔다갔다 처리
const $keyword = document.querySelectorAll(".keyword > li");
//forEach로 사용하기
$keyword.forEach((elem,idx)=>{
    //index번호 가운데만 반대로 이동하게 하기위함이다
    const posX = (idx === 1) ? 30 : -30;
    gsap.fromTo(elem,{
        x: posX
    },{
        x: -posX,
        yoyo: true,
        duration: 1,
        delay: idx*0.2, //시간을 두고 움직이게 하기 위해서
        // repeatDelay: idx*0.3, //잠깐 멈췄다가 이동시키기라서 삐그덕거리기때문에 자연스럽지 못하다.
        repeat: -1,
        ease: "none"
    })
})
//timeline으로 사용하기
// const tl2 = gsap.timeline({repeat: -1, yoyo: true});
// tl2.to($keyword,{
//     x: (i)=>(i===1 ? -100:100),
//     duration: 0.5,
//     ease: "sine.inOut", //보냈다가 당겨오는듯한 이펙트
//     stagger: {
//         each: 0.2
//     }
// })

//project 영역의 .item 들은 아래에서 올라오면서 보이도록
const $project = document.querySelectorAll(".normal > .item-list > .item");
$project.forEach((elem)=>{
    gsap.from(elem,{
        y: 100,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger:{
            trigger: elem,
            start: "top 90%",
            duration: 1,
            toggleActions: "play reverse play reverse"
        }
    })
})

//practice 영역은 계단식 애니메이션 처리
const $practice = document.querySelectorAll("#projects > .practice .item");
gsap.from($practice,{
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger:{
        trigger: ".practice",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
})

//skill들이 팝업하기
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

//home화면으로 올라가기
const $home = document.querySelector("#logo");
$home.addEventListener("click",()=>{
    window.scrollTo({top: 0});
})