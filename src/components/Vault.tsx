import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import PaginationItem from './PaginationItem';

gsap.registerPlugin(ScrollTrigger);


const Vault = () => {

    useEffect(() => {

        const paginations = gsap.utils.toArray<HTMLElement>(".pagination");

        const paragraphs = gsap.utils.toArray<HTMLElement>(".pagination p");

        const progbars = gsap.utils.toArray<HTMLElement>(".progbar");

        const titles = gsap.utils.toArray<HTMLElement>(".pagination .title");

        const nums = gsap.utils.toArray<HTMLElement>(".pagination .num");

        const ctx = gsap.context(() => {
            // gsap.set(paginations, { autoAlpha: 0, height: 0 });
            gsap.set(paragraphs, { opacity: 0.3, scaleY: 0, scaleX:0, transformOrigin:"0 0", visibility: "hidden", height: 0 });
            gsap.set(progbars, { opacity: 0, height: 0, visibility: "hidden" });
            gsap.set(titles, { opacity: 0.5 });
            gsap.set(nums, { opacity: 0.5 });
            let commulative = 0;
            paginations.forEach((pagination, idx) => {
                if (!pagination) return;
                const animationDuration = 1000;
                const paragraph = paragraphs[idx];
                const lineContainer = progbars[idx];
                const line = pagination.querySelector(".progChild");
                const title = pagination.querySelector(".title");
                const num = pagination.querySelector(".num");
                const lineAnimaiton = gsap.timeline({ paused: true }).to(line, { y: 240 })
                const mainAnimation = gsap.timeline({ paused: true })
                    // .to(pagination, { autoAlpha: 1, height: 300 })
                    .to(lineContainer, { opacity: 1, height: 120, visibility: "visible" }, "<")
                    .to(paragraph, { opacity: 1, scaleY: 1, scaleX:1, visibility: "visible", height: 180 }, "<")
                    .to(title, { opacity: 1 }, "<")
                    .to(num, { opacity: 1 }, "<")

                ScrollTrigger.create({
                    trigger: pagination,
                    // markers: true,
                    start: `${commulative} 30%`,
                    end: `+=${animationDuration} 30%`,
                    animation: lineAnimaiton,
                    scrub: 1,
                    onEnter: () => {
                        mainAnimation.play();
                    },
                    onLeave: () => {
                        mainAnimation.reverse();
                    },
                    onEnterBack: () => {
                        mainAnimation.play();
                    },
                    onLeaveBack: () => {
                        mainAnimation.reverse();
                    }
                })
                commulative += animationDuration;
            })

            // change color
            ScrollTrigger.create({
                trigger: "#vault",
                // markers: true,
                start: "top 80%",
                animation: gsap.to("#vault", { backgroundColor: "#edff66" }),
                toggleActions: "play none none reverse",
            });

            // pinnig
            ScrollTrigger.create({
                trigger: "#vault",
                // markers: true,
                start: "15% top",
                end: "+4000px top",
                pin: true,
            })
        })

        return () => ctx.revert();
    }, [])

    return (
        <section id='vault' className="bg-blue-200 min-h-[125dvh] w-screen relative">
            <div className="pt-12 md:pt-40">
                <AnimatedTitle text="the univers<b>e<b/><br/>powered by ze<b>n</b>t" className="justify-center sm:!justify-start text-blue-200 relative" />
            </div>
            <Button title='Enter Vault' className='bg-blue-200 !px-5 !py-4 text-blue-100 uppercase mx-auto sm:mx-20 mt-5' />
            <PaginationItem num="01" title='Shaping Zentry Collectively' desc="Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations." />
            <PaginationItem num="02" title='Unlocking Economic Opportunity' desc="ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem." />
            <PaginationItem num="03" title='Sharing Value Accrued' desc="ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities." />
            <video autoPlay loop muted src="/videos/v2.webm" className="opacity-50 md:opacity-100 absolute bottom-3 right-1/2 translate-x-1/2 size-56  md:-translate-x-0 md:bottom-10 md:right-10 md:size-96 z-20" />
        </section>
    )
}

export default Vault