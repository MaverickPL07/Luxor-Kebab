import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"

const RestaurantCarousel = ({current}) => {
    return (
        <>
            <div className="w-[35vw] h-[45vh] border-[1px] rounded-[1vh] border-orangelight bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${current.restaurant_img})`}}>
                <div className="p-[2vh] relative bottom-0 w-full h-[15vh] mt-[29.8vh]" style={{borderRadius: "0 0 1vh 1vh", backgroundColor: "rgba(0, 0, 0, .9)", backgroundImage: "radial-gradient(circle at bottom center, rgba(255, 168, 0, .2) 5%, transparent 40%)"}}>
                    <div className="w-full flex">
                        <div className="w-[70%]">
                            <div className="uppercase text-orange font-bold text-[5vh]">{current.name}</div>
                            <div className="italianno text-[5vh] text-[#9E9E9E]"><FontAwesomeIcon icon={faMapMarker} className="text-orange" />{current.city}, {current.country}</div>
                        </div>

                        <div className="w-[30%] grid justify-end">
                            {
                                current.features.map((elem, i) => (
                                    <div key={i} className="text-[2vh] text-[#9E9E9E] flex items-center gap-[.2vw] font-light">
                                        {<FontAwesomeIcon icon={elem.icon} />}
                                        {elem.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCarousel