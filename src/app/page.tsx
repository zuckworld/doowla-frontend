import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import BenefitsGrid from "../components/BenefitsGrid";
import AboutDoowla from "../components/AboutDoowla";
import AccountType from "../components/AccountType";
// import IndustryTicker from "../components/IndustryTicker";
import GetStarted from "../components/GetStarted";
import CardSliderSection from "../components/CardSliderSection";
import WaitlistEntry from "../components/WaitlistEntry";

export default function Home() {
  return (
    <>
      <Header />
      <WaitlistEntry />
      <Hero />
      <Features />
      <AboutDoowla />
      <AccountType />
      <CardSliderSection />
      {/* <IndustryTicker /> */}
      <BenefitsGrid />
      <GetStarted />
      <Footer />
    </>
  );
} 