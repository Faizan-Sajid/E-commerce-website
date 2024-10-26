import Head from "next/head";
import Navbar from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Products from "./components/products";
import PopularItem from "./components/popular-product";
import Banner from "./components/banner";
import Brands from "./components/brands";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
// import SmoothAnimatedSection from "./components/animation"

export default function Home() {
  return (
    <div>
       
      <Head>
        {/* Meraki UI CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/@merakiui/core@1.2.3/dist/css/merakiui.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero deviceType="desktop" />
      <Features />
      <Products />
      <PopularItem />
      <Banner />
      <Brands />
      <Blogs />
      <Footer />
      
    </div>
  );
}
