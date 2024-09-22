import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Question = ({question}) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className={`border-[1px] border-orangelight p-[3vh] my-[2vh] transition-all rounded-[1vh] w-[90vw] lg:w-[35vw] ${visible ? "h-fit" : ""}`} style={{boxShadow: `${visible ? "0 0 10px rgba(255, 168, 0, .8)" : ""}`, backgroundImage: "linear-gradient(45deg, rgba(153, 101, 0, .05), rgba(255, 168, 0, .5) 150%)"}}>
                <div className="font-semibold text-[2vh] flex">
                    <div className="w-full">{question.question}</div>

                    <div className="hover:cursor-pointer hover:text-orangelight transition-all" onClick={() => setVisible(!visible)}>
                        <FontAwesomeIcon icon={!visible ? faChevronDown : faChevronUp} />
                    </div>
                </div>

                <div className={`font-regular text-[gray] text-[1.5vh] mt-[1vh] transition-all ${visible ? "transition-all visible opacity-100" : "transition-all opacity-0 hidden"}`}>
                    {question.answer}
                </div>
            </div>
        </>
    )
}

export default Question