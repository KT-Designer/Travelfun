// KV滾動視差
gsap.registerPlugin(ScrollTrigger);
const t1 = gsap.timeline({
    scrollTrigger: {
    },
});
t1.to("#scroll_down", { opacity: 0 });


const t2 = gsap.timeline({
    scrollTrigger: {
    },
});
t2.to("#swipe_up", { opacity: 0 });




const t3 = gsap.timeline({
    scrollTrigger: {
        // 滾動.kv時觸發
        trigger: ".kv",
        // 固定
        pin: true,
        // 滾動一次的執行速度
        scrub: 0.5,
    },
});
t3.to("#left", { xPercent: "60" });
t3.to(".airplane", { x: "40vw", y: "-30vh" }, "<");
t3.to("#word", { yPercent: "-60" }, "<");
t3.to("#right", { xPercent: "-60" }, "<");









// 淡進
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
mm.add("(min-width: 1200px)", () => {
    // 熱門景點
    const fadein1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".hot",
            start: "top 40%",
            end: "bottom 50%",
        }

    });
    fadein1.from('#L1', { opacity: 0, x: -100, duration: 0.8 })
    fadein1.from('#L2', { opacity: 0, x: -100, duration: 0.8 })
    fadein1.from('#R1', { opacity: 0, x: 100, duration: 0.8 })


    // 浪漫歐洲
    const fadein2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".europe",
            start: "top top",
            end: "bottom 50%",
        }

    });
    fadein2.from('#L3', { opacity: 0, x: -100, duration: 0.8 })
    fadein2.from('#R2', { opacity: 0, x: 100, duration: 0.8 })


    // 中東古文明
    const fadein3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".turkey",
            start: "top 20%",
            end: "bottom 50%",
        }

    });
    fadein3.from('#L4', { opacity: 0, x: -100, duration: 0.8 })
    fadein3.from('#R3', { opacity: 0, x: 100, duration: 0.8 })

    // 紐澳仙境
    const fadein4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".australia",
            start: "top top",
            end: "bottom 50%",
        }

    });
    fadein4.from('#R4', { opacity: 0, x: 100, duration: 0.8 })
    fadein4.from('#L5', { opacity: 0, x: -100, duration: 0.8 })

    // 北美奇觀
    const fadein5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".america",
            start: "top top",
            end: "bottom 50%",
        }

    });
    fadein5.from('#L6', { opacity: 0, x: -100, duration: 0.8 })
    fadein5.from('#R5', { opacity: 0, x: 100, duration: 0.8 })

    return () => {
    };
});














