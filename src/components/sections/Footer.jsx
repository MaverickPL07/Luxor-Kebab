import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCcVisa, faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons"
import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons"
import Logo from "../Logo"

const Footer = () => {
    return (
        <div className="p-[5vh] w-full bg-[#181818] lg:flex gap-[10vw] grid">
            <div>
                <Logo />
                <div className="italianno text-[3vh] text-[gray]">On market since 2010</div>
                
                <div className="my-[2vh]">
                    Author: Szymon Ziemian<br />
                    <a href="" className="underline text-orangelight">Portfolio</a><br />
                    
                    <div className="text-[3vh] flex gap-[.5vw] text-orange items-center my-[2vh]">
                        <FontAwesomeIcon icon={faReact} />
                        <FontAwesomeIcon icon={faFigma} />

                        <div className="text-[2vh] text-[gray]">
                            React.js, tailwindcss, Figma
                        </div>
                    </div>

                    <div>
                        2024
                    </div>
                </div>
            </div>

            <div className="text-orangelight">
                <strong className="text-[2vh]">Sections</strong><br />

                <div className="grid text-white text-[1.5vh]">
                    <a href="#">Home</a><br />
                    <a href="#section-meat">Meat</a><br />
                    <a href="#section-menu">Menu</a><br />
                    <a href="#section-reviews">Reviews</a><br />
                    <a href="#section-membership">Membership</a><br />
                    <a href="#section-restaurants">Restaurants</a><br />
                    <a href="#section-contact">Contact</a><br />
                    <a href="#section-newsletter">Newsletter</a><br />
                    <a href="#section-FAQ">FAQ</a><br />
                </div>
            </div>

            <div className="text-orangelight">
                <strong className="text-[2vh]">Links</strong><br />

                <div className="grid text-white text-[1.5vh]">
                    <a href="">Link</a><br />
                    <a href="">Link</a><br />
                    <a href="">Link</a><br />
                    <a href="">Link</a><br />
                </div>
            </div>

            <div className="text-orangelight">
                <strong className="text-[2vh]">Partners</strong><br />

                <div className="flex text-white text-[2vh] gap-[1vw]">
                    <FontAwesomeIcon icon={faCcVisa} />
                    <FontAwesomeIcon icon={faPaypal} />
                    <FontAwesomeIcon icon={faCcMastercard} />
                </div>
            </div>

            <div className="text-orangelight">
                <strong className="text-[2vh]">Quote</strong><br />

                <div className="grid text-white text-[2vh]">
                    "First we eat, then we do everything else."<br /> 
                    - M.F.K. Fisher
                </div>
            </div>
        </div>
    )
}

export default Footer