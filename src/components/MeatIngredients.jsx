const MeatIngredients = ({meat}) => {
    return (
        <div className="card-gradient lg:absolute lg:right-[15vw] border-orange border-[1px] p-[3vh] rounded-[.5vh] min-w-[12.5vw] h-[40vh]">
            <div className="text-[#757575] text-[1vh] lg:text-[2vh]">{meat.name}</div>
            <div className="text-[#FFFFFF] font-bold text-[1.25vh] lg:text-[1.75vh]">Ingredients</div>
            <hr />

            <ul>
                {meat.ingredients.map((ingredient, i) => (
                    <li key={`ing${i}`} className="flex items-center gap-[.5vw] py-[.5vw] text-[1.5vh] lg:text-[2vh] font-light text-[#EFEFEF]">
                        <div className="w-[.6vw] h-[.6vw] bg-transparent rounded-full border-[1px] border-orange"></div>
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MeatIngredients