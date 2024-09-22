import SectionTitle from "../SectionTitle"
import Divider from "../Divider"

const Contact = () => {
    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-contact">
                <SectionTitle title="CONTACT" subtitle="Methods to contact us." />

                <div className="grid grid-cols-2 my-[5vh] place-items-center w-fit mx-auto gap-[5vw]">
                    <div className="grid place-items-center">
                        <div className="text-orangelight font-medium text-[4vh]">Luxor</div>
                        <div className="inter text-[#767676] text-[2vh]">+48 111 222 333</div>
                    </div>

                    <div className="grid place-items-center">
                        <div className="text-orangelight font-medium text-[4vh]">La kebap</div>
                        <div className="inter text-[#767676] text-[2vh]">+33 999 999 999</div>
                    </div>

                    <div className="col-span-2 grid place-items-center">
                        <div className="text-orangelight font-medium text-[4vh]">Main</div>
                        <div className="inter text-[#767676] text-[2vh]">+48 999 999 999</div>
                    </div>
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Contact