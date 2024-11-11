import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import Clients from "./Components/Clients/Clients.js";
import Features from "./Components/Feastures/Feastures.js";
import Pricing from "./Components/Pricing/Pricing.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {
  return (
    <div class="body-wrap">
      <Header />
      <main class="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
