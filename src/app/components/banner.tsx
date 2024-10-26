
import Banner1 from "../../../public/banner-1.png"
import Banner2 from "../../../public/banner-2.png"
import Banner3 from "../../../public/banner-3.png"


function Banner (){
    return(
        <section className="font-sans grid grid-cols-1 sm:w-full lg:grid-cols-3 gap-4 p-5">
            <div className="bg-no-repeat bg-cover h-[150px] w-[350px] "
            style={{backgroundImage:`url(${Banner1.src})`}}>
                <div className="p-5">
                <span className="text-[14px] text-gray-500">Smart Offer</span>
                <h1 className="text-[18px] font-semibold">Save 20% on <br />
                Woman Bag</h1>
                <span className="text-[14px] font-bold text-[#088178]">Shop Now</span>

                </div>
            </div>
            <div className="bg-no-repeat bg-cover h-[150px] w-[350px]"
            style={{backgroundImage:`url(${Banner2.src})`}}>
                <div className="p-5">
                <span className="text-[14px] text-gray-500">Sale Offer</span>
                <h1 className="text-[18px] font-semibold"> Great Summer <br />
           Collection

                </h1>
                <span className="text-[14px] font-bold text-[#088178]">Shop Now</span>

                </div>
            </div>
            <div className="bg-no-repeat bg-cover h-[150px] w-[350px] "
            style={{backgroundImage:`url(${Banner3.src})`}}>
                <div className="p-5">
                <span className="text-[14px] text-gray-500">New Arrivals</span>
                <h1 className="text-[18px] font-semibold"> Shop Today’s <br />
                Deals & Offers
           

                </h1>
                <span className="text-[14px] font-bold text-[#088178]">Shop Now</span>

                </div>
            </div>

        </section>
    )
}
export default Banner