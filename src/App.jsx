import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-[#0B101C] text-white pt-6">
            <Navbar />
            <Hero />
            <Services />
            <Technologies />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;