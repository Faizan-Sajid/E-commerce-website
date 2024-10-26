import Image from "next/image";
import product from "../../../../public/product-1-2.jpg";
import product1 from "../../../../public/product-2-1.jpg";
import product2 from "../../../../public/product-3-1.jpg";
import product3 from "../../../../public/product-4-1.jpg";
import product4 from "../../../../public/product-5-1.jpg";
import product5 from "../../../../public/product-6-1.jpg";
import product6 from "../../../../public/product-7-1.jpg";
import product7 from "../../../../public/thumbnail-2.jpg";
import product8 from "../../../../public/product-15-2.jpg";
import product10 from "../../../../public/product-9-1.jpg";
import product11 from "../../../../public/product-9-1.jpg";
import product12 from "../../../../public/product-5-1.jpg"
import product13 from "../../../../public/product-6-1.jpg"
import product14 from "../../../../public/product-7-1.jpg"
import product15 from "../../../../public/product-7-1.jpg"
import SmoothAnimatedSection from "@/app/components/animation";

const data = [
  { image: product, span: "New Arrival", heading: "Stylish Pattern Shirt" },
  { image: product1, span: "Limited Stock", heading: "Trendy Cotton Shirt" },
  { image: product2, span: "Bestseller", heading: "Elegant White Shirt" },
  { image: product3, span: "Exclusive", heading: "Patterned Casual Wear" },
  { image: product4, span: "Popular", heading: "Lightweight Linen Shirt" },
  { image: product5, span: "New Arrival", heading: "Vibrant Summer Shirt" },
  { image: product6, span: "Limited Stock", heading: "Classic Fit Shirt" },
  { image: product7, span: "Bestseller", heading: "Modern Office Shirt" },
  { image: product8, span: "Exclusive", heading: "Comfortable Cotton Tee" },
  { image: product10, span: "New Arrival", heading: "Relaxed Fit Shirt" },
  { image: product11, span: "Limited Edition", heading: "Denim Overshirt" },
  { image: product12, span: "Limited Edition", heading: "Denim Overshirt" },
  { image: product13, span: "Limited Edition", heading: "Denim Overshirt" },
  { image: product14, span: "Limited Edition", heading: "Denim Overshirt" },
  { image: product15, span: "Limited Edition", heading: "Denim Overshirt" },
  
];

function Cards() {
  return (
    <>
    <SmoothAnimatedSection>
    <section className="grid grid-cols-12 gap-6 p-6">
      {/* Product Cards Section */}
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-[255px] w-[260px] relative overflow-hidden shadow-md rounded-lg group hover:shadow-xl transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.heading}
              height={235}
              width={235}
              className="object-cover rounded-lg"
            />
            {/* Overlay with Span and Heading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex flex-col justify-end">
              <span className="text-sm opacity-80">{item.span}</span>
              <h3 className="text-lg font-semibold">{item.heading}</h3>
            </div>
            {/* Add to Cart Button - Only on Hover */}
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-yellow-500 text-black font-semibold py-1 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

     {/* Category Section - Spans 4 columns */}
<div className="col-span-12 lg:col-span-4">
  <div className="sticky top-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 
                  rounded-xl shadow-lg border border-gray-200">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
    <ul className="space-y-4">
      {[
        "Men's Shirts",
        "Casual Wear",
        "Office Shirts",
        "Summer Collection",
        "Linen Shirts",
        "Bestseller Items",
      ].map((category, index) => (
        <li
          key={index}
          className="text-lg text-gray-700 hover:text-yellow-600 
                     cursor-pointer transition-all duration-300 
                     hover:scale-105"
        >
          {category}
        </li>
      ))}
    </ul>
  </div>
</div>

    </section>
    </SmoothAnimatedSection>
    </>
  );
}

export default Cards;
