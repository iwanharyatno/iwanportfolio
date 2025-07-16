import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen w-full relative">
            {/* Azure Depths */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
                }}
            />
            <div className='text-white pt-6 px-4'>
                <Navbar />
                <Hero />
                <Services />
                <Technologies />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;