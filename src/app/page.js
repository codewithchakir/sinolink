import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Videos from "./components/Videos";
import WhyChina from "./components/WhyChina";
import Universities from "./components/Universities";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-arabic">
      <Header />
      <Hero />
      <WhyChina />
      <AboutUs />
      <Services />
      {/* <Universities /> */}
      <Videos />
      <Footer />

    </div>
  );
}
