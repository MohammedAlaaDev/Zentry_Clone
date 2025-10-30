import { useEffect, useRef } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {

    const partnersRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const translateAnimation = gsap.timeline({ paused: true })
                .to(partnersRef.current, { y: -500 })

            ScrollTrigger.create({
                trigger: ".pinned-partners",
                // markers: true,
                start: "top 20%",
                end: "bottom center",
                scrub: 1,
                animation: translateAnimation,
                toggleActions: "play play reverse reverse",

            })

            ScrollTrigger.create({
                trigger: ".partners",
                // markers: true,
                start: "top top",
                end: "+=1000 center",
                pin: true,
            });


            const partnersParagraphs = gsap.utils.toArray<HTMLElement>(".pinned-partners p");

            partnersParagraphs.forEach((paragraph) => {
                if (!paragraph) return;

                const coloringAnimation = gsap.timeline({ paused: true })
                    .to(paragraph, { color: "#edff66" })

                ScrollTrigger.create({
                    trigger: paragraph,
                    // markers: true,
                    start: "top 50%",
                    onEnter: () => {
                        coloringAnimation.play();
                    },
                    onEnterBack: () => {
                        coloringAnimation.reverse();
                    },
                    onLeaveBack: () => {
                        coloringAnimation.reverse();
                    },
                    onLeave: () => {
                        coloringAnimation.play();
                    }
                })
            })
        })

        return () => ctx.revert();

    }, [])

    return (
        <section className="partners overflow-hidden h-[110dvh] flex gap-16 flex-col items-center md:justify-center md:items-start md:flex-row py-48 md:px-14 lg:px-44 xl:px-64 bg-blue-200 text-blue-100">
            <div className="text-container flex-grow relative h-full">
                <p className="text max-w-60">
                    <span className="font-bold">Our brand partners</span> cover tech, gaming,
                    entertainment, & lifestyle sectors, enhancing our reach and player experience.
                </p>
            </div>
            <div ref={partnersRef} className="pinned-partners relative translate-x-0 translate-y-0 font-zentry text-center md:text-left items-center md:items-start w-fit flex flex-col gap-4 justify-center text-6xl">
                <p>our partners</p>
                <p>our partners</p>
                <p>our partners</p>
                <p>our partners</p>
                <p>our partners</p>
                <p>our partners</p>
                <p>binance labs</p>
                <p>coinbase ventures</p>
                <p>pantera capital</p>
                <p>defiance capital</p>
            </div>
        </section>
    )
}

export default Partners