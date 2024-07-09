import "./App.css";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <Category />
        </section>
        <section>
          <FeatureSectionFruits />
        </section>
        <section>
          <FeatureSectionBreakfast />
        </section>
        <section>
          <BannerSection />
        </section>
        <section>
          <BlogSection />
        </section>
        <section>
          <NewsLetter />
        </section>
        <section>
          <FeatureSection />
        </section>
      </main>
    </>
  );
}

export default App;
