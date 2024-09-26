import Hero from "../components/Hero";
import About from "../components/About";
import Competition from "../components/Competition";
import Participation from "../components/Participation";
import Jury from "../components/Jury";
import Partners from "../components/Partners";
import Action from "../components/Action";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Competition Details Section */}
      <Competition />

      {/* Participation Conditions Section */}
      <Participation />

      {/* Organizers and Jury Section */}
      <Jury />

      {/* Partners Section */}
      <Partners />

      {/* Call to Action Section */}
      <Action />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
