const RestaurantCarouselCircle = ({id, res}) => {
    return (
        <>
            <div className={`w-[2vh] h-[2vh] ${id == res ? "bg-orangelight" : "bg-transparent"} border-[1px] border-orangelight rounded-full hover:cursor-pointer hover:bg-orangelight transition-all`}></div>
        </>
    )
}
// ${bg-transparent}
export default RestaurantCarouselCircle