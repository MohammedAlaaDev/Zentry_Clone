import { useEffect } from "react"
import AnimatedTitle from "./AnimatedTitle"
import gsap from "gsap";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import RoundedCorners from "./RoundedCorners";

const Welcome = () => {


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".clipped-img", { clipPath: "polygon(11% 3%, 100% 24%, 94% 98%, 5% 93%)" })
            gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: "#clip",
                    start: "center 40%",
                    end: "+=800px center",
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => {
                        const prog = self.progress;
                        const clipPathVal = `
                        polygon(
                            ${(1 - prog) * 11}% ${(1 - prog) * 3}%,
                            100% ${(1 - prog) * 24}%,
                            ${gsap.utils.interpolate(94, 100, prog)}% ${gsap.utils.interpolate(98, 100, prog)}%,
                            ${(1 - prog) * 5}% ${gsap.utils.interpolate(93, 100, prog)}%
                        )
                        `
                        gsap.to(".clipped-img", {
                            clipPath: clipPathVal,
                        })
                    }
                },
            }).to(
                ".clipped-img",
                {

                    width: "100vw",
                    height: "100vh",
                });
        })

        return () => ctx.revert();
    }, [])

    return (
        <section id="about" className="pt-20 bg-blue-50 relative overflow-hidden min-h-dvh w-100 mb-0">
            <div className="flex flex-col gap-10 items-center">
                <p className="text-xs lg:text-[10px] text-center font-circular-web">WELCOME TO ZENTRY</p>
                <AnimatedTitle text={
                    `Disc<b>o</b>ver the world's<br/>largest shared <b>a</b>dventure`
                } />
            </div>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <div id="clip" className="w-100 relative ">
                    <MouseParallaxChild className="relative h-dvh" factorX={0.3} factorY={0.5}>
                        <div className="flt z-40 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-44 flex justify-center items-center flex-col">
                            <div className="z-40 clipped-img overflow-hidden mt-10 w-[35vw] rounded-2xl border border-black h-96">
                                <img src="/img/about.webp" className="absolute inset-0 size-full object-cover" />
                            </div>
                            <RoundedCorners />
                        </div>
                        <div className="z-10 font-circular-web absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-xl mt-52 sm:mt-36 md:mt-40 lg:mt-32">
                            <p className="text-black text-xl">The Game Of Game begins-your life, now an epic MMORPG</p>
                            <p className="opacity-30 font-semibold">Zentry unites every player from countless games and platforms, both digital and physical, into a unified Play Economy</p>
                        </div>
                    </MouseParallaxChild>
                </div>
            </MouseParallaxContainer>
        </section>
    )
}

export default Welcome