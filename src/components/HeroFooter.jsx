import { faGift, faL, faLink } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import HeroFooterIcon from "./HeroFooterIcon"

const HeroFooter = () => {
    return (
        <>
        {/* right-[35vw]translate-x-[25%] bottom-[6vh] */}
            <div className="flex relative  italianno text-[2vw] ml-[65vh] text-[#767676]  gap-[12vw]">
                <div>
                    Visit us on social media!<br />
                    <div className="text-[1vw] flex justify-center gap-[1vw]">
                        <HeroFooterIcon link={"https://facebook.com"} icon={faFacebook} color={"orange"} />
                        <HeroFooterIcon link={"https://instagram.com"} icon={faInstagram} color={"orange"} />
                        <HeroFooterIcon link={"https://linkedin.com"} icon={faLinkedin} color={"orange"} />
                    </div>
                </div>

                <div>
                    Customer support<br />
                    +48 999 999 999
                </div>
            </div>
        </>
    )
}

export default HeroFooter