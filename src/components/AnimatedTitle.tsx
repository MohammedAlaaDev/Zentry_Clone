import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ text, className }: { text: string, className?: string }) => {
    const titleRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!titleRef.current) return;
            gsap.timeline({
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
            }).to(titleRef.current.querySelectorAll(".animated-word"), {
                opacity: 1,
                transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
                duration: 0.5,
                stagger: 0.05,
                ease: "power4.out",
            }
            )
        })
        return () => ctx.revert();
    }, [])
    return (
        <div ref={titleRef} className="animated-title">
            {text.split("<br/>").map((line, idx) => (
                <div key={idx} className={`flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 ${className}`}>
                    {line.split(" ").map((word, i) => (
                        <span key={i} className={`animated-word mx-1 ${className}`} dangerouslySetInnerHTML={{ __html: word }} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle