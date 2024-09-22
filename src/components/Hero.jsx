import Button from './Button'
import HeroFooter from './HeroFooter'
import Divider from './Divider'

const Hero = () => {
    return (
        <>
            <div id="hero" className="flex lg:items-end items-start lg:h-[83vh] h-fit">
                <div className='flex gap-[2vw]'>   
                    <img src={require('../img/Kebab1.png')} className="w-[22.5vw]" id="hero-image" alt="Kebab" />

                    <div id="hero-text">
                        <div className="font-extrabold text-[3.5vw] p-0 m-0">
                            <div><span className="text-orange">E</span>NHANCE</div>
                            <div><span className="text-orange">Y</span>OUR</div>
                            <div><span className="text-orange">K</span>EBAB</div>
                            <div><span className="text-orange">E</span>XPERIENCE.</div>
                        </div>

                        <div className="text-gray text-[2vh]">
                            Experience our delightful products and feel like<br />
                            you have eaten kebab for the first time.
                        </div>

                        <Button text={"DISCOVER"} type={"button"} category="primary" id={"discover-button"} styles="p-[2vh] font-bold my-[5vh]" />
                    </div>    
                </div>
            </div>

            <HeroFooter />
            <Divider styles={"bottom-[5vh]"} />
        </>
    )
}

export default Hero