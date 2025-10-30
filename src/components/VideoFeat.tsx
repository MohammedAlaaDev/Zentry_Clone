import { ReactNode, useRef, useState } from "react"

export const TiltCard = ({ className = "", children }: { className?: string, children: ReactNode }) => {

    const tiltRef = useRef<HTMLDivElement | null>(null)
    const [transformVal, setTransformVal] = useState("");

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!tiltRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = tiltRef.current.getBoundingClientRect();

        const relativeX = (clientX - left) / width;
        const relativeY = (clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 15;
        const tiltY = (relativeX - 0.5) * 15;
        const newTransform = `perspective(3000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformVal(newTransform);

    }

    return (
        <div
            onMouseMove={(e) => {
                handleMouseMove(e);
            }}
            onMouseLeave={() => {
                setTransformVal("");
            }}
            style={{ transform: transformVal }}
            ref={tiltRef}
            className={`transition-300 ${className}`}>
            {children}
        </div>
    )
}

const VideoFeat = ({ link, title, paragraph, className }: { link: string, title?: ReactNode, paragraph?: string, className?: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    return (
        <div
            className={`relative w-full min-h-[23rem] border p-6 border-blue-50 rounded ${className}`}>
            <div className="text relative text-blue-50 z-40 max-w-56">
                <h3 className="grid-title mb-5">{title}</h3>
                <p className="text-sm">{paragraph}</p>
            </div>
            <video
                ref={videoRef} autoPlay muted loop src={link} className="z-10 absolute w-full h-full inset-0 object-cover" />
        </div>
    )
}

export default VideoFeat