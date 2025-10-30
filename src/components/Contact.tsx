import AnimatedTitle from "./AnimatedTitle"
import Button from "./Button"
import RoundedCorners from "./RoundedCorners"

const Contact = () => {
    return (
        <section className="bg-blue-50 px-12 py-24">
            <div className="bg-blue-200 overflow-hidden relative rounded-xl w-full h-full text-blue-100 text-center flex-center p-16">
                <div className="relative z-20 flex flex-col gap-10 items-center">
                    <p className="text-xs lg:text-[10px] text-center font-circular-web">JOIN ZENTRY</p>
                    <AnimatedTitle text={
                        `Let's build the<br/>new era of<br/>gaming together.`
                    }
                        className="text-4xl md:text-6xl"
                    />
                    <Button title="contact us" className="bg-blue-50 text-blue-200 py-4 px-7 uppercase" />
                </div>
                <div className="z-10 hidden md:block flt contact-img overflow-hidden absolute top-0 left-10  ">
                    <img className="w-80 h-52 clip-1" src="/img/contact-1.webp" alt="con" />
                </div>
                <div className="z-10 hidden md:block flt contact-img overflow-hidden absolute -bottom-1 left-10 ">
                    <img className="w-80 h-52 clip-2" src="/img/contact-2.webp" alt="con" />
                </div>
                <div className="z-10 flt contact-img  absolute bottom-0 right-0 sm:right-32 md:right-5 ">
                    <img className="w-80 clip-3" src="/img/swordman.webp" alt="con" />
                    <img src="/img/swordman-partial.webp" alt="con" className="absolute top-0" />
                </div>
                <RoundedCorners />
            </div>
        </section>
    )
}

export default Contact