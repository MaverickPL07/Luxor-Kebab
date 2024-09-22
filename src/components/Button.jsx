const Button = ({text, type, category, id, styles}) => {
    return (
        <>
            <button
                type={type}
                id={id}
                className={`p-[1vh] text-[2vh] ${category == "primary" ? "bg-orange" : category == "secondary" ? "border-[1px] border-orange hover:bg-orange transition-all" : ""} rounded-[.5vh] w-[100%] font-regular text-white ${styles} `}
            >
                {text}
            </button>
        </>
    )
}

export default Button