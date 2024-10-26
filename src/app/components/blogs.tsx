import Image from "next/image";
import blog from "../../../public/blog-1.jpg"
import blog1 from "../../../public/blog-2.jpg"
import image from "../../../public/banner-5.jpg"
import image2 from "../../../public/banner-7.jpg"
import SmoothAnimatedSection from "./animation";




function Blogs(){
    return(
        <section className="font-sans p-10 bg-[#dbf8f7] ">
            <SmoothAnimatedSection>
            <h1 className="text-[25px] text-black font-bold "><span className="text-[#088178] text-[25px] font-semibold">From </span>Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

           
            <div className="grid grid-cols-1">
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                    <Image src={blog} alt="image" className="h-[150px] w-[220px] pb-4 hover:cursor-pointer" />
                   <div className="h-[148px] w-[310px]">
                   <span className="text-lg text-[#088178]">Fashion</span>
                    <h1 className="text-lg font-semibold ">Qualcomm is developing a Nintendo Switch-like console, report says
                    </h1>
                    <span className="text-[14px] text-[#088178]">14 April 2024</span>
                    <span className="text-[14px] text-[#088178]">   . 12M views   </span>
                    <span className="text-[14px] text-[#088178] hover:cursor-pointer">   Read More..</span>
                   </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                <Image src={blog1} alt="image" className="h-[150px] w-[220px] hover:cursor-pointer"/>
                <div className="h-[148px] w-[310px]">
                   <span className="text-lg text-[#088178]">Healthy</span>
                    <h1 className="text-lg font-semibold ">Not even the coronavirus can derail 5G s global momentum
                    </h1>
                    <span className="text-[14px] text-[#088178]">14 April 2024</span>
                    <span className="text-[14px] text-[#088178]">   . 12M views   </span>
                    <span className="text-[14px] text-[#088178] hover:cursor-pointer">   Read More..</span>
                   </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className="bg-no-repeat bg-cover w-[221px] h-[309px] rounded-3xl p-5"
                style={{backgroundImage:`url(${image.src})`}}>
                    <span className="text-[14px] text-gray-500">Accessories</span>
                    <h1 className="text-[18px] font-bold">Save 17% on <br />
                    Autumn Hat</h1>
                    <span className="text-[#088178] text-[14px]">Shop Now</span>
                </div>

                <div className="bg-no-repeat bg-cover w-[221px] h-[309px] rounded-3xl p-5"
                style={{backgroundImage:`url(${image2.src})`}}>
                    <span className="text-[14px] text-gray-500">Accessories</span>
                    <h1 className="text-[18px] font-bold">Save 17% on <br />
                    Autumn Hat</h1>
                    <span className="text-[#088178] text-[14px]">Shop Now</span>
                </div>

            </div>
            </div>
            </SmoothAnimatedSection>
        </section>
    )

}
export default Blogs;