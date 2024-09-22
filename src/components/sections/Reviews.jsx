import SectionTitle from "../SectionTitle"
import { reviews } from "../../constants" 
import Review from '../Review'
import Divider from "../Divider"

const Reviews = () => {
    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-reviews">
                <SectionTitle title={"REVIEWS"} subtitle={"Find out what others think about us and our products!"} />

                <div className="lg:flex m-auto w-fit my-[5vh] gap-[2vw]">
                    {
                        reviews.map((item, i) => (
                            <Review review={item} key={i} />
                        ))
                    }
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Reviews