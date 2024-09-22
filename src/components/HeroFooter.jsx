import { faGift, faL, faLink } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import HeroFooterIcon from "./HeroFooterIcon"

const HeroFooter = () => {
    return (
        <>
            <div className="flex relative italianno text-[7vw] lg:text-[2vw] mx-auto w-fit text-[#767676] gap-[12vw]">
                <div>
                    Visit us on social media!<br />
                    <div className="lg:text-[1vw] text-[5vw] flex justify-center lg:gap-[1vw] gap-[3vw]">
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