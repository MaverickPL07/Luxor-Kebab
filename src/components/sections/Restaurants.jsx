import Divider from '../Divider'
import SectionTitle from '../SectionTitle'
import Restaurant from '../Restaurant'
import RestaurantCarousel from '../RestaurantCarousel'
import { restaurants } from '../../constants'
import { useState, useEffect } from 'react'
import RestaurantCarouselCircle from "../RestaurantCarouselCircle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Restaurants = () => {
    const [res, setRes] = useState(0)

    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-restaurants">
                <SectionTitle title="RESTAURANTS" subtitle="Currently, we are available in Europe - Poland and France." />

                <div className="lg:flex gap-[3vw] w-[90vw] lg:w-[70vw] mx-auto my-[5vh]">
                    <div>
                        <RestaurantCarousel current={restaurants[res]} />
                        <div className="my-[2vh] mx-auto w-full flex justify-center items-center gap-[3vw] lg:gap-[.5vw]">
                            <div className="hover:cursor-pointer text-orangelight text-[2vh]" onClick={() => setRes(res != 0 ? res - 1 : res)}><FontAwesomeIcon icon={faArrowLeft} /></div>

                            {
                                restaurants.map((el, i) => (
                                    <div onClick={() => setRes(i)} key={i}>
                                        <RestaurantCarouselCircle res={res} id={i} />
                                    </div>
                                ))
                            }

                            <div className="hover:cursor-pointer text-orangelight text-[2vh]" onClick={() => setRes(res != restaurants.length - 1 ? res + 1 : res)}><FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>

                    <Restaurant restaurant={restaurants[res]} />
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Restaurants