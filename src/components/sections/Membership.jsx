import Divider from '../Divider'
import { memberships } from '../../constants'
import SectionTitle from '../SectionTitle'
import MembershipPlan from '../MembershipPlan'

const Membership = () => {
    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-membership">
                <SectionTitle title={"MEMBERSHIP"} subtitle={"We offer membership subscriptions for our customers. Membership offers various benefits based on choosen plan. The price can vary in different locations."} />

                <div className="w-fit mx-auto lg:mx-none lg:flex lg:w-full lg:justify-center my-[5vh] lg:gap-[2vw]">
                    {
                        memberships.map((el, i) => (
                            <MembershipPlan plan={el} key={i} />
                        ))
                    }
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Membership