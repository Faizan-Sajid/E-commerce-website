"use client";

import Image from "next/image";
import product0 from "../../../public/product-9-1.jpg";
import product1 from "../../../public/product-9-2.jpg";
import product2 from "../../../public/product-10-1.jpg";
import product3 from "../../../public/product-10-2.jpg";
import product4 from "../../../public/product-14-1.jpg";
import product5 from "../../../public/product-14-2.jpg";
import product6 from "../../../public/product-15-1.jpg";
import product7 from "../../../public/product-15-2.jpg";
import product8 from "../../../public/product-16-6.jpg";
import product9 from "../../../public/thumbnail-2.jpg";
import product10 from "../../../public/thumbnail-3.jpg";
import product11 from "../../../public/thumbnail-4.jpg";
import product12 from "../../../public/thumbnail-5.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmoothAnimatedSection from "./animation";

// Product Data
const cardData = [
  { image: product0, heading: "Shoes" },
  { image: product1, heading: "Shoes" },
  { image: product2, heading: "Jumpsuits" },
  { image: product3, heading: "Jumpsuits" },
  { image: product4, heading: "Bag" },
  { image: product5, heading: "Bag" },
  { image: product6, heading: "Scarf-Cap" },
  { image: product7, heading: "Hats" },
  { image: product8, heading: "Bag" },
  { image: product9, heading: "Shoes" },
  { image: product10, heading: "Shoes" },
  { image: product11, heading: "Pillow-Case" },
  { image: product12, heading: "Bags" },
];

function PopularItem() {
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
      items: 1,
    },
  };

  return (
    <>
    <SmoothAnimatedSection>
    <main className="p-6">
      <h1 className="text-[25px] text-black font-bold "><span className="text-[#088178] text-[25px] font-semibold">Popular </span>Categories</h1>
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
        {cardData.map((product, index) => (
          <div
            key={index}
            className="group w-[166px] h-[212px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.heading}
              width={166}
              height={140}
              className="object-cover w-full h-[140px] group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold">{product.heading}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </main>
    </SmoothAnimatedSection>
    </>
  );
}

export default PopularItem;
