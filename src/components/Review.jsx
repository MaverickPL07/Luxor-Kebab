import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as starEmpty } from "@fortawesome/fontawesome-free-regular"

const Review = ({review}) => {
    return (
        <>
            <div className="border-[1px] border-orangelight p-[2vh] rounded-[1vh] review w-[90vw] my-[5vh] lg:my-[0] lg:w-[20vw]">
                <div className="text-orangelight text-[2vh]">
                    {
                        review.stars.map((star, i) => (
                            <div  key={i}>
                                {
                                    star.filled ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={starEmpty} />
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="my-[2vh]">
                    <div className="text-orangelight inter font-medium text-[2.5vh]">
                        {review.title}
                    </div>

                    <div className="text-[1.75vh] font-light mt-[1vh] mb-[2vh] min-h-[7vh]">
                        {review.content}
                    </div>

                    <div className="flex gap-[.5vw] my-[1vh]">
                        <div className="w-[6vh] h-[6vh] rounded-full bg-no-repeat bg-cover bg-center border-[1px] border-orangelight border-solid" style={{backgroundImage: `url(${review.avatar})`}}></div>

                        <div>
                            <div className="text-orangelight text-[2vh]">{review.name}</div>
                            <div className="text-[#B3B3B3] text-[1.75vh]">{review.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review