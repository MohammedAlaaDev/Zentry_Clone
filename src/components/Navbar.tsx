import Button from "./Button"
import { FaPaperPlane } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {

    function useScrollProgress() {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                setProgress(scrollTop);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        return { progress };
    }

    const { progress } = useScrollProgress();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!navRef.current) return;

        if (progress <= 30) {
            setIsNavVisible(true);
            navRef.current.classList.remove("black-nav");
        } else if (progress > lastScrollY) {
            setIsNavVisible(false);
            navRef.current.classList.remove("black-nav");
        } else {
            setIsNavVisible(true);
            navRef.current.classList.add("black-nav");
        }
        setLastScrollY(progress);
    }, [progress])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(navRef.current, { y: isNavVisible ? 0 : -100, opacity: isNavVisible ? 1 : 0, ease: "none" })
        })

        return () => ctx.revert();
    }, [isNavVisible])

    const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"];

    const navLinksUI = navLinks.map((item) => {
        return (
            <Button key={item} title={item} className="bg-transparent font-bold nav-hover-button" />
        )
    })

    return (
        <nav ref={navRef} className={` rounded-xl transition-300 gap-5 flex-col md:flex-row flex items-center justify-center md:justify-between fixed z-50 inset-0 h-40 sm:h-32 md:h-20 p-4 m-4`}>
            <div className="flex-center gap-5">
                <img src="/img/logo.png" alt="logo" className="w-12" />
                <Button title="PRODUCTS" className="bg-blue-50 !px-6 !py-3" rightIcon={<FaPaperPlane />} />
            </div>
            <div className="flex-center flex-wrap gap-3">
                {navLinksUI}
            </div>
        </nav>
    )
}

export default Navbar