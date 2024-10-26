"use client"
import Image from "next/image";
import brand1 from "../../../public/brand-1.png"
import brand2 from "../../../public/brand-2.png"
import brand3 from "../../../public/brand-3.png"
import brand4 from "../../../public/brand-4.png"
import brand5 from "../../../public/brand-5.png"
import brand6 from "../../../public/brand-6.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Brands(){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 8,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
    
    
    return (
       <section className="p-5">
         <h1 className="text-[25px] text-black font-bold "><span className="text-[#088178] text-[25px] font-semibold">Featured </span>Brands</h1>
        <Carousel
        responsive={responsive}
        
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 0.8s ease"
        transitionDuration={800}
        containerClass="carousel-container"
        itemClass="p-2"
        
      >
        <div>
            <Image src={brand1} alt="brand-logo"/>
            </div>
           <div> <Image src={brand2} alt="brand-logo"/></div>
           <div> <Image src={brand3} alt="brand-logo"/></div>
           <div> <Image src={brand4} alt="brand-logo"/></div>
           <div> <Image src={brand5} alt="brand-logo"/></div>
            <div><Image src={brand6} alt="brand-logo"/></div>
        
        </Carousel>

       </section>
    )
}
export default Brands;
