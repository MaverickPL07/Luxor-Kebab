const Product = ({product}) => {
    return (
        <div className="border-[1px] rounded-[1vh] border-orange p-[1vh] w-[15vw] h-[50vh] card-gradient product-card">
            {
                product.badge ? <div className="w-0 h-0"><div className="w-full bg-orangelight h-[5vh] product-card-badge flex items-center justify-center text-[2vh] font-extrabold">{product.badge}</div></div> : ""
            }

            <div className={`w-full h-[25vh]`} style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${product.img})`}}></div>

            <div className="w-[85%] m-auto my-[1vh] font-bold text-[2vh] grid h-[40%]">
                <div>{product.name}</div>
                <div className="text-orangelight font-medium my-[1vh] text-[1.75vh]">${product.price}</div>
                <div className="text-[#757575] font-light text-[1.75vh]">{product.desc}</div>

                <button type="button" className="bg-orangelight p-[1vh] w-full rounded-[1vh] place-self-end">Details</button>
            </div>
        </div>
    )
}

export default Product