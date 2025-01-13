import { Header } from "./_components/header";
import { LandingPage } from "./_components/landingPage";
import { Navbar } from "./_components/navbar";
import { ExploreProperty } from "./_components/explorePropertyPage";
import { PropertyGuide } from "./_components/propertyGuide";
import { PropertyUpload } from "./_components/propertyUpload";
import { FAQSection } from "./_components/faq";
// import { AppDownloadSection } from "./_components/appDownload";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <LandingPage />
      <ExploreProperty />
      <PropertyGuide />
      <PropertyUpload />
      <FAQSection />
      {/* <AppDownloadSection /> */}
    </div >
  );
}
