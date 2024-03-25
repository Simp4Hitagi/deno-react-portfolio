import Image from "next/image";
import GitHubLink from "../assets/GitHubLink.png"
import LinkedIn from "../assets/LinkedIn.png"
import Instagram from "../assets/Instagram.png"

const LinksLayout = () => {
    return (
        <div className="socialLinks" >
            <div className="container links absolute top-[28rem] h-screen socialLinks">
                <div className="relative top-0 left-80 z-50 bg-green-50">
                <Image
                className=""
                src={LinkedIn}
                alt="1st image"
                />
                </div>
                <div className="relative -top-[75px] left-[58rem] z-50 bg-green-50">
                <Image
                className=""
                src={GitHubLink}
                alt="2nd image"
                />
                </div>
                <div className="relative -top-[155px] left-[95rem] z-50 bg-green-50">
                <Image
                className=""
                src={Instagram}
                alt="3rd image"
                />
                </div>
            </div>
        </div>
    )
}

export default LinksLayout;