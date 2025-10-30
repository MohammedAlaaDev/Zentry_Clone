import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-violet-300 p-5 flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-5">
            <p className="copy">
                &copy; Nova 2025 All Rights Reserved
            </p>
            <div className="social flex-center gap-5">
                <FaDiscord style={{
                    width: "24px",
                    height: "24px",
                }} />
                <FaTwitter style={{
                    width: "24px",
                    height: "24px",
                }} />
                <FaYoutube style={{
                    width: "24px",
                    height: "24px",
                }} />
                <FaFacebookSquare style={{
                    width: "24px",
                    height: "24px",
                }} />
            </div>
            <div className="privacy flex-center gap-5">
                <p>Privacy</p>
                <p>Policy</p>
            </div>
        </footer>
    )
}

export default Footer