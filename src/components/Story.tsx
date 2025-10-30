import { useEffect, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle"
import Button from "./Button";
import RoundedCorners from "./RoundedCorners";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Story = () => {

    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const element = imgRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -35;
        const rotateY = ((x - centerX) / centerX) * 35;

        gsap.to(element, {
            rotateX,
            rotateY,
            duration: 0.3,
            perspective: 600,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        if (!imgRef.current) return;

        gsap.to(imgRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            ease: "power1.inOut",
        })
    }

    useEffect(() => {
        const tl = gsap.timeline({ paused: true }).from(".storyParagraph", {
            opacity: 0,
            transform: "translate3d(0,100px,500px) rotateY(60deg) rotateX(-40deg)",
            transformOrigin: "50% 50% -50%",
        }).from("#realm-btn", {
            opacity: 0,
            y: 100,
            duration: 0.3,
        })
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".storyParagraph",
                // markers: true,
                start: "top 100%",
                animation: tl,
                toggleActions: "play none none reverse",
            })
        })

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="bg-blue-200 min-h-dvh text-blue-75">
            <div className="flex flex-col gap-5 items-center">
                <p className="text-xs lg:text-[10px] text-center font-circular-web uppercase">the multiversal ip world</p>
                <AnimatedTitle text={
                    `the st<b>o</b>ry of<br/>the hidden real<b>m</b>`
                }
                    className="text-blue-100 mix-blend-difference z-10 relative"
                />
            </div>
            <div
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                onMouseLeave={() => {
                    handleMouseLeave();
                }}
                className="relative">
                <div className="flt h-[30vh] md:h-dvh">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img ref={imgRef} src="/img/entrance.webp" alt="enterance" />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className="relative flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start p-5">
                    <p
                        style={{ perspective: "600px" }}
                        className="storyParagraph mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                        Where realms converge, lies Zentry and the boundless pillar.
                        Discover its secrets and shape your fate amidst infinite
                        opportunities.
                    </p>

                    <Button
                        id="realm-btn"
                        title="discover prologue"
                        className="mt-5 uppercase bg-blue-50 text-blue-200 !p-4"
                    />
                </div>
            </div>
        </section>
    )
}

export default Story