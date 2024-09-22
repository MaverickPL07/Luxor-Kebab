const NavbarTabMobile = ({text, link}) => {
    return (
        <>
            <div className="grid place-items-center  text-center text-[2vh] transition-all">
                <a href={link} className="hover:text-orangelight min-w-[20vw] hover:bg-orange-transparent">
                    {text}
                </a>
            </div>
        </>
    )
}

export default NavbarTabMobile