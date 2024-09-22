import Logo from './Logo'
import NavbarTab from './NavbarTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NavbarTabMobile from './NavbarTabMobile'

const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <>
        <nav id="navbar" className="p-[5vh] flex items-center relative z-[10]">
            <div className="lg:w-[25vw] w-[90vw]">
                <Logo />
            </div>
            
            <div className="items-center justify-center gap-[3.5vw] text-[2vh] hidden lg:flex">
                <NavbarTab text={"Home"} active={true} link={"#"} />
                <NavbarTab text={"Meat"} active={false} link={"#section-meat"} />
                <NavbarTab text={"Menu"} active={false} link={"#section-menu"} />
                <NavbarTab text={"Reviews"} active={false} link={"#section-reviews"} />
                <NavbarTab text={"Membership"} active={false} link={"#section-membership"} />
                <NavbarTab text={"Restaurants"} active={false} link={"#section-restaurants"} />
                <NavbarTab text={"Contact"} active={false} link={"#section-contact"} />
                <NavbarTab text={"Newsletter"} active={false} link={"#section-newsletter"} />
                <NavbarTab text={"FAQ"} active={false} link={"#section-FAQ"} />
            </div>

            <div className="lg:hidden text-[3vh]">
                <FontAwesomeIcon icon={faList} onClick={() => {setMobile(!mobile)}}/>
            </div>
        </nav>

        {
            mobile ?
            <div className="border-[1px] border-orangelight rounded-[1vh] bg-[#181818] absolute top-[12.5vh] right-[8vw] z-10">
                <NavbarTabMobile text={"Home"} link={"#"} />
                <NavbarTabMobile text={"Meat"} link={"#section-meat"} />
                <NavbarTabMobile text={"Menu"} link={"#section-menu"} />
                <NavbarTabMobile text={"Reviews"} link={"#section-reviews"} />
                <NavbarTabMobile text={"Membership"} link={"#section-membership"} />
                <NavbarTabMobile text={"Restaurants"} link={"#section-restaurants"} />
                <NavbarTabMobile text={"Contact"} link={"#section-contact"} />
                <NavbarTabMobile text={"Newsletter"} link={"#section-newsletter"} />
                <NavbarTabMobile text={"FAQ"} link={"#section-FAQ"} />
            </div>
            :
            ""
        }
        </>
    )
}

export default Navbar