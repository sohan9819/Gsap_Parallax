gsap.registerPlugin(ScrollTrigger);

// const t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".a",
//     start: "bottom 60%",
//     endTrigger: ".c",
//     end: "bottom 80%",
//     scrub: 1,
//     markers: true,
//     toggleActions: "restart pause resume pause",
//   },
// });

// t1.to(".b", {
//   x: 400,
//   rotation: 360,
//   duration: 3,
// })
//   .to(".b", {
//     x: 0,
//     backgroundColor: "purple",
//     duration: 3,
//   })
//   .to(".b", {
//     x: 0,
//     rotation: 360,
//     duration: 3,
//   });

// gsap.to(".bg", {
//   y: 50,
//   backgroundPosition: `50% ${innerHeight / 2}`,
//   duration: 2,
//   scrub: 1,
// });

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    });
  }

  // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
  else {
    section.bg.style.backgroundPosition = "50% 0px";

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});
