import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faXmarkCircle as faX } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"

const MembershipPlan = ({plan}) => {
    return (
        <>
            <div className="border-[1px] border-orangelight p-[5vh] rounded-[1vh] membership-plan lg:w-[25vw] min-h-[50vh] lg:my-[0] my-[5vh]">
                {plan.badge ? <div className="w-0 h-0"><div className="w-full bg-orangelight h-[5vh] plan-card-badge flex items-center justify-center text-[2vh] font-extrabold">{plan.badge}</div></div> : ""}
                <div className="font-semibold text-[3vh]">{plan.name}</div>
                
                <div className="flex items-end justify-center">
                    <div className={`text-[5vh] font-semibold text-[${plan.priceColor}]`}>${plan.price}</div>
                    <div className="text-[#BBBBBB]"> / month</div>
                </div>

                <div className="my-[2vh] text-[2vh] min-h-[35vh]">
                    {
                        plan.benefits.map((benefit, i) => (
                            <div className="my-[1vh] flex gap-[.25vw]" key={i}>
                                {benefit.val ? <FontAwesomeIcon icon={faCheckCircle} className="text-[#FFA800]" /> : <FontAwesomeIcon icon={faX} className="text-[#FF0000]" />}
                                
                                <div className={`text-[#9E9E9E] ${!benefit.val ? "line-through" : ""}`}>
                                    {benefit.name}
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Button text={"Purchase"} category={plan.name == "PREMIUM" ? "primary" : "secondary"} type="button" />
            </div>
        </>
    )
}

export default MembershipPlan