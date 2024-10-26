import Image from "next/image";
import feature1 from "../../../public/feature-1.png";
import feature2 from "../../../public/feature-2.png";
import feature3 from "../../../public/feature-3.png";
import feature4 from "../../../public/feature-4.png";
import feature5 from "../../../public/feature-5.png";
import feature6 from "../../../public/feature-6.png";
import SmoothAnimatedSection from "./animation";

// Array to store image and heading for each card
const cardData = [
  { image: feature1, heading: "Free Shipping" },
  { image: feature2, heading: "Online Order" },
  { image: feature3, heading: "Save Money" },
  { image: feature4, heading: "Easy Returns" },
  { image: feature5, heading: "Happy Sell" },
  { image: feature6, heading: "Exclusive Offers" },
];

function Features() {
  return (
    <SmoothAnimatedSection>
    <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5">
      
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border-2 border-[#dbdddd] rounded-lg text-center p-3 
                     max-w-[165px] mx-auto h-auto transition-transform 
                     hover:scale-105 hover:shadow-lg"
        >
          <Image
            src={card.image}
            alt={`Feature ${index + 1}`}
            className="h-[93px] w-[135px] mx-auto pb-5"
          />
          <h2
            className="text-sm sm:text-base font-semibold text-black 
                      bg-[#fddde4] rounded-lg py-1 px-2 mx-auto 
                      w-fit max-w-full"
          >
            {card.heading}
          </h2>
        </div>
      ))}
      
    </main>
    </SmoothAnimatedSection>
  );
}

export default Features;
