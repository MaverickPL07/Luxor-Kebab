const NavbarTab = ({text, active, link}) => {
    return (
        <a href={link} className={`${active ? "font-bold text-orange" : "text-gray"} hover:text-orange transition-all nav-option`}>
            {text}
            {
                active ? 
                <div className="h-[.2vh] bg-orange rounded-[1vh] mt-[.5vh] mb-[.5vh] nav-under"></div>
                :
                <div className="h-[.2vh] rounded-[1vh] mt-[.5vh] mb-[.5vh] nav-under w-[0]"></div>
            }
        </a>
    )
}

export default NavbarTab