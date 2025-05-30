gsap.registerPlugin(ScrollTrigger);

//header 영역 애니메이션
// const tl = gsap.timeline();
// tl.from(".slogan>h2",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// })
// .from(".slogan>h1",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// },"-=0.5")
// .from(".slogan>p",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// },"-=0.5");

//위에 timeline과 동일
gsap.from(".slogan>h2,.slogan>h1,.slogan>p",{
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.5
});

//about-me
gsap.from("#about-me",{
    opacity: 0,
    y: 100,
    // duration: 1,
    scrollTrigger:{
        trigger: "#about-me",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        ease: "power2.out"
    }
});

const $ul = document.querySelector("#latest>ul")
const dist = $ul.scrollWidth - (window.innerWidth *0.7); // 이동 되어야하는 width값//곱하기 0.7을 한 이유는 width값을 100%가 아닌 70%줬기때문이다.
gsap.to($ul,{
    x: -dist,
    ease: "power2.out",
    scrollTrigger:{
        trigger: "#latest",
        start: "top top",
        end: "+="+dist,
        pin: true,
        scrub: true
    }
})

gsap.from(".title",{
    opacity: 0,
    scale: 0.5,
    scrollTrigger:{
        trigger: "#contact",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
        ease: "power2.out"
    }
})