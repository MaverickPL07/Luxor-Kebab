const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="ml-auto mr-auto w-fit max-w-[30vw] text-center">
            <div className="font-black inter text-[3vw]">{title}</div>
            <div className="text-[#767676] text-[1vw]">{subtitle}</div>
        </div>
    )
}

export default SectionTitle