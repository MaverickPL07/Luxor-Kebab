import SectionTitle from "../SectionTitle"
import { useState } from 'react'
import { meats } from '../../constants'
import MeatIngredients from "../MeatIngredients"
import Divider from '../Divider'

const Meat = () => {
    const [meat, setMeat] = useState(meats[0])

    return (
        <>
            <div className={`w-full flex justify-center items-start  py-[10vh]`} id="section-meat">
                <div className="lg:flex w-fit h-[100%] m-auto justify-center">

                    <div className="w-fit">
                        <SectionTitle title={"MEAT"} subtitle={"Discover more about our delicious and juicy handmade meats we use in process of making our kebabs."} />
                        
                        <div className="grid place-items-center mt-[6vh] mb-[6vh] text-[#FFFFFF]">
                            <label className="text-[2vh]">Meat type</label><br />

                            <select className="text-[1.75vh] text-black p-[1vh] min-w-[15vw] rounded-[.5vw] focus:outline-none bg-orange font-medium text-[#FFFFFF] text-white" onChange={e => setMeat(meats[e.target.value])}>
                                <option value={0}>{meats[0].name}</option>
                                <option value={1}>{meats[1].name}</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-[3vw] justify-center lg:block">
                        <img src={meat.img} className="lg:absolute lg:left-[15vw]" id="meat" />
                        <MeatIngredients meat={meat} />
                    </div>
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Meat