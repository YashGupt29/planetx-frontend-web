import { Header } from "./_components/header";
import { LandingPage } from "./_components/landingPage";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <LandingPage />
    </div>
  );
}
