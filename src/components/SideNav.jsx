import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import SideNavCircle from "./SideNavCircle"
import { sections } from '../constants'

const SideNav = ({section}) => {
    return (
        <>
            <div className="hidden lg:block bg-sidenav h-screen fixed right-0 top-0  w-[4vw] nav-side sidenav"></div>
            <div className="hidden lg:block fixed right-[1.5vw] top-[30vh] z-[15] text-[2vh] text-orange-transparent w-[1vw] h-[50vh] text-[3vh] sidenav">
                <div className="side-nav-circle"><FontAwesomeIcon icon={faArrowUp} /></div>

                {sections.map((el, i) => (
                    <div className="my-[2vh]" key={i}>
                        <SideNavCircle active={i == section} />
                    </div>
                ))}

                <div className="side-nav-circle"><FontAwesomeIcon icon={faArrowDown} /></div>
            </div>
        </>
    )
}

export default SideNav