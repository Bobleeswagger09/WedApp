import CallToAction from "./component/CallToAction";
import CoordinatorsGrid from "./component/CoordinatorsGrid";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
import WhyChooseUs from "./component/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <WhyChooseUs />
      <CoordinatorsGrid />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
