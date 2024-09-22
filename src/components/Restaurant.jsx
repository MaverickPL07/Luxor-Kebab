import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faMap, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faStar as starEmpty } from "@fortawesome/fontawesome-free-regular"

const Restaurant = ({restaurant}) => {
    return (
        <div className="lg:w-[30vw]">
            <div className="text-orange uppercase text-[5vh] font-bold">{restaurant.name}</div>
            <div className="text-[2vh] text-[#9E9E9E] font-regular">Since {restaurant.start_date}</div>
            <div className="text-[2vh] text-[#9E9E9E] font-light my-[3vh]">{restaurant.desc}</div>

            <div className="text-[2.25vh] text-[#9E9E9E] flex font-light items-center gap-[.5vw]">
                <FontAwesomeIcon icon={faMap} className="text-orange" />
                <div>{restaurant.country}, {restaurant.city}, {restaurant.street}</div>
            </div>

            <div className="text-[2.25vh] text-[#9E9E9E] flex font-light items-center gap-[.5vw]">
                <FontAwesomeIcon icon={faPhone} className="text-orange" />
                <div>{restaurant.reservation_phone} - Table reservation</div>
            </div>

            <div className="my-[5vh] text-[3vh] flex gap-[.5vw] text-orangelight" style={{filter: "drop-shadow(0 0 100px #FFA800)"}}>
                {
                    restaurant.stars.map((star, i) => (
                        <div key={i}>
                        {
                            star.filled ? <FontAwesomeIcon icon={faStar}/> : <FontAwesomeIcon icon={starEmpty} />
                        }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Restaurant