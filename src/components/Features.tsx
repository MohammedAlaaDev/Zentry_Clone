import VideoFeat from "./VideoFeat"
import { TiltCard } from './VideoFeat';
import { FaPaperPlane } from "react-icons/fa6";
const Features = () => {
    return (
        <section className="bg-blue-200 p-10 lg:p-32">
            <header className="font-circular-web text-blue-50 text-lg max-w-xl mb-10">
                <h3 className="">Into the Metagame Layer</h3>
                <p className="mt-2 opacity-50">
                    Immerse yourself in a rich and ever-expanding universe where a vibrant
                    array of products converge into an interconnected overlay experience on your world.
                </p>
            </header>
            <div className="grids special-font">
                <div className="grid lg:grid-cols-2 grid-rows-4 gap-5">
                    <TiltCard className="row-span-1 lg:col-span-2">
                        <VideoFeat link="/videos/feature-1.mp4"
                            title={
                                <>
                                    radia<b>n</b>t
                                </>
                            } paragraph={`
                            A cross-platform metagame app,
                            turning your activities across Web2 and Web3 games into a rewarding adventure.
                            `}
                        />
                    </TiltCard>
                    <TiltCard className="lg:row-span-2 col-span-1">
                        <VideoFeat link="/videos/feature-2.mp4"
                            title={
                                <>
                                    zig<b>m</b>a
                                </>
                            } paragraph={`
                            An anime and gaming-inspired NFT collection - the IP primed for expansion.`}
                            className="h-full"
                        />
                    </TiltCard>
                    <TiltCard className="row-span-1 col-span-1">
                        <VideoFeat link="/videos/feature-3.mp4"
                            title={
                                <>
                                    n<b>e</b>xus
                                </>
                            } paragraph={`
                            A gamified social hub,
                            adding a new dimension of play to social interaction for Web3 communities. `}
                        />
                    </TiltCard>
                    <TiltCard className="row-span-1 col-span-1">
                        <VideoFeat link="/videos/feature-4.mp4"
                            title={
                                <>
                                    az<b>u</b>l
                                </>
                            } paragraph={`
                    A cross-world AI Agent - elevating your gameplay to be more fun and productive.`}
                        />
                    </TiltCard>
                    <TiltCard className="grid-1">
                        <div className="w-full relative min-h-[23rem] border p-6 bg-violet-300 rounded ">
                            <h3 className=" text-blue-200 z-40 max-w-56 font-zentry text-6xl mb-5">
                                <>M<b>o</b>re</>
                                <br />
                                <>Co<b>m</b>ing</>
                                <br />
                                <>s<b>o</b>on.</>
                            </h3>
                            <FaPaperPlane style={{
                                position: "absolute",
                                bottom: "30px",
                                right: "20px",
                                fontSize: "50px",
                            }} />
                        </div>
                    </TiltCard>
                    <TiltCard className="grid-1">
                        <VideoFeat link="/videos/feature-5.mp4" />
                    </TiltCard>
                </div>
            </div>
        </section>
    )
}

export default Features