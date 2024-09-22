const SideNavCircle = ({active}) => {
    return (
        <>
            <div className={`w-[1vw] h-[1vw] ${active ? "bg-orange circle-active-side" : "bg-transparent"} border-[1px] border-orange rounded-full side-nav-circle`}>

            </div>
        </>
    )
}

export default SideNavCircle