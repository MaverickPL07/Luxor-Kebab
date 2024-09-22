const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="ml-auto mr-auto max-w-[90vw] lg:max-w-[30vw] text-center">
            <div className="font-black inter text-[7vw] lg:text-[3vw]">{title}</div>
            <div className="text-[#767676] text-[5vw] lg:text-[1vw]">{subtitle}</div>
        </div>
    )
}

export default SectionTitle