import Image from "next/image";
import banner from "../../../public/banner-4.png"
import product from "../../../public/product-1-2.jpg";
import product1 from "../../../public/product-2-1.jpg";
import product2 from "../../../public/product-3-1.jpg";
import product3 from "../../../public/product-4-1.jpg";
import product4 from "../../../public/product-5-1.jpg";
import product5 from "../../../public/product-6-1.jpg";
import product6 from "../../../public/product-7-1.jpg";
import product7 from "../../../public/thumbnail-2.jpg";
import SmoothAnimatedSection from "./animation";


// Product Data
const cardData = [
  { image: product, alt: "Colourful Pattern Shirt" },
  { image: product1, alt: "Plain Pocket Shirt" },
  { image: product2, alt: "Vintage Floral Shirt" },
  { image: product3, alt: "Flower Sleeve Lapel Shirt" },
  { image: product4, alt: "Ethnic Floral Casual Shirt" },
  { image: product5, alt: "Patterned Shirt" },
  { image: product6, alt: "Stitching Hole Sandals" },
  { image: product7, alt: "Product Thumbnail" },
];

function Products() {
  return (
    <>
    <SmoothAnimatedSection>
   
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 font-sans">
      
      {cardData.map((product, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
        >
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.alt}
            width={300}
            height={380}
            className="object-cover rounded-[40px] transition-transform duration-300 p-5 group-hover:scale-110"
          />
        </div>
      ))}

<div
  className=" h-[253px] bg-no-repeat bg-cover lg:w-[1200px]"
  style={{ backgroundImage: `url(${banner.src})` }}
>
 
  <div className="hidden lg:block p-10  rounded-lg max-w-md">
    <h4 className="text-[18px] text-[#088178] font-semibold">Repair Services</h4>
    <h1 className="text-3xl leading-snug">
      We re an Apple <br /> Authorised Service Provider
    </h1>
    <button className="px-5 py-2 rounded-lg bg-[#088178] text-white font-semibold">
      Learn more
    </button>
  </div>
</div>


    </main>
    </SmoothAnimatedSection>
    </>
  );
}

export default Products;
