const NavbarTabMobile = ({text, link}) => {
    return (
        <>
            <div className="grid place-items-center  text-center text-[3vh] transition-all p-[2vh]">
                <a href={link} className="hover:text-orangelight min-w-[20vw]">
                    {text}
                </a>
            </div>
        </>
    )
}

export default NavbarTabMobile