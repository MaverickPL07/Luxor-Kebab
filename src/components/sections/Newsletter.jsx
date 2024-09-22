import SectionTitle from "../SectionTitle"
import Divider from "../Divider"
import Button from "../Button"
import { useState, useEffect } from 'react'

const Newsletter = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(visible)
            return
    }, [visible])

    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-newsletter">
                <SectionTitle title="NEWSLETTER" subtitle="Sign up for our newsletter and receive a 10% discount cupon." />

                <div className="w-fit mx-auto my-[5vh] flex">
                    <input onClick={setVisible} placeholder="Enter your e-mail address" className="lg:w-[40vw] text-[2.5vh] p-[2vh] focus:outline-none rounded-[1vh] border-[2px] border-orangelight bg-orange-transparent text-[#FFF]" style={{borderRadius: "1vh 0 0 1vh"}} />

                    <div className={`${visible ? "newsletter-visible" : "newsletter-hidden"}`}>
                        <Button type="submit" category="primary" text="Submit" styles="lg:w-[7vw] h-[7.4vh]" id="newsletter-submit" />                    
                    </div>
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Newsletter