// "use client"
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Image from "next/image";
// import background from "../../../public/btn-brush-bg-1.png"
// import background1 from "../../../public/btn-brush-bg-2.png"
// import background3 from "../../../public/btn-brush-bg-3.png"
// import sliderpic from "../../../public/slider-2.png"
// import slider3pic from "../../../public/slider-3.png"
// import slider2pic from "../../../public/slider-1.png"
// import SmoothAnimatedSection from './animation';


// function Hero ( { deviceType }: { deviceType: string }){
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 1
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 1
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 1
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//     return(
//     <main>
//       <SmoothAnimatedSection>
//         <Carousel responsive={responsive}
//          showDots={true}
//          infinite={true}
//          autoPlay={deviceType !== "mobile"}
//   autoPlaySpeed={3000}
//   keyBoardControl={true}
//   customTransition="all 1"
//   transitionDuration={1000}>
//  <div className="font-sans text-center pt-5 sm:pt-10 sm:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//   {/* Left Section */}
//   <div className="h-auto sm:h-[350px] w-full max-w-[450px] mx-auto">
//     <h4 className="text-lg sm:text-2xl mb-2">Hot Promotions</h4>
//     <h2 className="text-3xl sm:text-5xl font-bold mb-3">Fashion Trending</h2>
//     <h1 className="text-4xl sm:text-6xl font-semibold text-[#d77f7a] mb-4">
//       Great Collections
//     </h1>
//     <p className="text-sm sm:text-lg mb-5">
//       Save more with coupons & up to 20% off
//     </p>
//     <h2
//       className="h-[50px] w-[255px] max-w-full bg-no-repeat bg-cover font-bold flex items-center justify-center"
//       style={{ backgroundImage: `url(${background.src})` }}
//     >
//       Discover Now
//     </h2>
//   </div>

//   {/* Right Section with Image */}
//   <div className="w-full h-auto">
//     <Image
//       src={sliderpic}
//       alt="Fashion promotion"
//       className="w-full h-full object-cover"
//       priority={true}
//     />
//   </div>
//   </div>

//   {/* 2nd slider start */}
//   {/* Left Section */}

 
//  <div className="font-sans text-center pt-5 sm:pt-10 sm:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//   <div className="h-auto sm:h-[350px] w-full max-w-[450px] mx-auto">
//     <h4 className="text-lg sm:text-2xl mb-2">Upcoming offer</h4>
//     <h2 className="text-3xl sm:text-5xl font-bold mb-3">Big Deals from</h2>
//     <h1 className="text-4xl sm:text-6xl font-semibold text-[#63a2c1] mb-4">
//       Manufacturer
//     </h1>
//     <p className="text-sm sm:text-lg mb-5">
//       Clothing,Shoes,bags,Wallet.....
//     </p>
//     <h2
//       className="h-[50px] w-[255px] max-w-full bg-no-repeat bg-cover font-bold flex items-center justify-center"
//       style={{ backgroundImage: `url(${background1.src})` }}
//     >
//       Discover Now
//     </h2>
//   </div>

//   <div className="w-full h-auto">
//     <Image
//       src={slider3pic}
//       alt="Fashion promotion"
//       className="w-full h-full object-cover"
//       priority={true}
//     />
//   </div>

  
//  </div>


//  {/* 3rd slider start */}
//   {/* Left Section */}

 
//   <div className="font-sans text-center pt-5 sm:pt-10 sm:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//   <div className="h-auto sm:h-[350px] w-full max-w-[450px] mx-auto">
//     <h4 className="text-lg sm:text-2xl mb-2">Trade in offer</h4>
//     <h2 className="text-4xl sm:text-5xl font-bold mb-3">Super Values Deal</h2>
//     <h1 className="text-6xl sm:text-6xl font-semibold text-[#088178] mb-4">
//      On All Products
//     </h1>
//     <p className="text-sm sm:text-lg mb-5">
//     Save more with coupons & up to 20% off
//     </p>
//     <h2
//       className="h-[50px] w-[255px] max-w-full bg-no-repeat bg-cover font-bold flex items-center justify-center"
//       style={{ backgroundImage: `url(${background3.src})` }}
//     >
//       Discover Now
//     </h2>
//   </div>
//   {/* Right section with image */}

//   <div className="w-full h-auto">
//     <Image
//       src={slider2pic}
//       alt="Fashion promotion"
//       className="w-full h-full object-cover"
//       priority={true}
//     />
//   </div>

  
//  </div>
//  </Carousel>
//  </SmoothAnimatedSection>


// </main>

//     )
// }
// export default Hero;