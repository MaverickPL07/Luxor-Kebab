import SectionTitle from "../SectionTitle"
import Divider from '../Divider'
import { products } from "../../constants"
import Product from './../Product'

const Menu = () => {
    return (
        <>
            <div className={`w-full py-[10vh]`} id="section-menu">
                <div className="w-[90vw] m-auto">
                    <SectionTitle title={"MENU"} subtitle={"Check our menu. Everyone will find something suitable for them!"} />

                    <div className="lg:flex gap-[3vw] justify-center items-center my-[9vh] grid grid-cols-2">
                        {
                            products.map((item, i) => (
                                <Product key={i} product={item} />
                            ))
                        }
                    </div>

                    <button type="button" style={{filter: "drop-shadow(0 0 10px #FFA800)"}}  className="w-full bg-orangelight p-[2.5vh] font-bold rounded-[.75vh] text-[2vh]">CHECK FULL MENU</button>
                </div>
            </div>

            <Divider />
        </>
    )
}

export default Menu