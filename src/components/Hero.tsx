import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { IoLocation } from "react-icons/io5";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const nextVideo = useRef<HTMLVideoElement | null>(null);
  const videos = 3;
  const [currentIdx, setCurrentIdx] = useState(2);
  const nextIdx = (currentIdx + 1) % videos;
  const movingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const [loadedVids, setLoadedVids] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(()=>{
  //   setIsLoading(loadedVids!==videos);
  // }, [loadedVids])

  const handleNextVideo = () => {
    const animatedVideo = `#hero-${nextIdx}`;
    const videosIDs = ["#hero-0", "#hero-1", "#hero-2"];
    const filteredVids = videosIDs.filter((vidID) => {
      return vidID !== `hero-${nextIdx}`;
    });

    filteredVids.forEach((vid) => {
      gsap.set(vid, { zIndex: 20 });
    });

    gsap.set(animatedVideo, {
      zIndex: 40,
      width: "0px",
      height: "0px",
    });
    setCurrentIdx((prev) => prev + 1);

    gsap.to(animatedVideo, {
      width: "100%",
      height: "100%",
    });
  };



  useEffect(() => {
    if (!heroSectionRef.current) return;

    const heroElement = heroSectionRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (movingTimeout.current) clearTimeout(movingTimeout.current);
      movingTimeout.current = setTimeout(() => {
        gsap.to(nextVideo.current, {
          autoAlpha: 0,
          duration: 1,
        });
      }, 1000);
      gsap.to(nextVideo.current, {
        autoAlpha: 1,
      });

      const heroSize = heroElement.getBoundingClientRect();
      const { clientX, clientY } = e;
      const boxSize = 200;

      const top = (clientY + window.scrollY) - boxSize / 2;
      const right = heroSize.width - (clientX + boxSize / 2);
      const bottom = (heroSize.height - window.scrollY) - (clientY + boxSize / 2);
      const left = clientX - boxSize / 2;

      const x1 = left;
      const y1 = top;
      const x2 = heroSize.width - right;
      const y2 = top;
      const x3 = heroSize.width - right;
      const y3 = heroSize.height - bottom;
      const x4 = left;
      const y4 = heroSize.height - bottom;

      const nextVidClipPath = `polygon(
        ${x1}px ${y1}px,
        ${x2}px ${y2}px,
        ${x3}px ${y3}px,
        ${x4}px ${y4}px
      )`;

      gsap.set(nextVideo.current, {
        clipPath: nextVidClipPath,
        cursor: "pointer",
      });
    };

    heroElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.herosec', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 81% 100%, 21% 100%, 0 100%)' })
      gsap.to('.herosec', {
        scrollTrigger: {
          // markers: true,
          trigger: ".herosec",
          start: "center 40%",
          end: "bottom center",
          scrub: true,
        },
        clipPath: "polygon(25% 1%, 76% 0, 95% 86%, 79% 95%, 16% 95%, 8% 84%)"
      })
    })
    return () => ctx.revert();
  }, [])

  return (
    <>
      {/* {isLoading?(<div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
      )
    : */}

      <section className="h-dvh w-full relative bg-blue-50">
        <div
          ref={heroSectionRef}
          className="herosec relative inset-0 overflow-hidden z-10"
        >
          <div id="video-frame" className="h-dvh">
            {Array.from({ length: videos }, (_, idx) => (
              <video
                key={idx}
                className="absolute object-cover h-dvh w-dvw top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={`/videos/hero-${idx}.mp4`}
                id={`hero-${idx}`}
                autoPlay
                muted
                loop
              // onLoadedData={()=>{
              //   setLoadedVids(pre=>pre+1);
              // }}
              />
            ))}
            <video
              ref={nextVideo}
              onClick={handleNextVideo}
              className="absolute object-cover h-dvh w-dvw z-40"
              src={`/videos/hero-${nextIdx}.mp4`}
              autoPlay
              muted
              loop
            />
          </div>
          <h1 className="special-font font-zentry text-6xl md:text-9xl absolute bottom-5 z-40 right-5 text-blue-100">
            G<b>a</b>ming
          </h1>
          <div className="absolute top-44 md:top-28 left-7 z-40 flex flex-col items-start justify-center gap-3">
            <h2 className="special-font font-zentry text-6xl md:text-9xl text-blue-100">
              REDEFI<b>N</b>E
            </h2>
            <p className="font-robert-regular text-blue-100">
              ENTER THE METAGAME LAYER
              <br />
              UNLEASH THE PLAY ECONOMY
            </p>
            <Button title="WATCH TRAILER" leftIcon={<IoLocation />} />
          </div>
        </div>
        <h2 className="special-font font-zentry text-6xl md:text-9xl absolute bottom-5 right-5 text-black">
          G<b>a</b>ming
        </h2>
      </section>
      {/* } */}
    </>

  );
};

export default Hero;
