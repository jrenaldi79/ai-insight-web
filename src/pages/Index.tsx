
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Demos from "../components/Demos";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Blog />
        <Demos />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
