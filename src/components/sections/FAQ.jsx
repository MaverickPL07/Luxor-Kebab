import SectionTitle from "../SectionTitle"
import { faqs } from "../../constants"
import Question from "../Question"

const FAQ = () => {
    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-FAQ">
                <SectionTitle title="FAQ" subtitle="Frequently asked questions." />

                <div className="w-fit mx-auto my-[5vh]">
                    {
                        faqs.map((faq, i) => (
                            <Question key={i} question={faq} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FAQ