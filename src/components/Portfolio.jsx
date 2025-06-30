import urc from "../assets/portfolio/urc.png";
import bar2025 from "../assets/portfolio/bar2025.png";
import promokna from "../assets/portfolio/promokna.png";
import intermedia_lms from "../assets/portfolio/intermedia_lms.png";
import skybridgefunrun from "../assets/portfolio/skybridgefunrun.png";
import restorray from "../assets/portfolio/restorray.png";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "UNSOED Running Community Jersey Shop",
            tech: "Laravel, Alpinejs, TailwindCSS",
            image: urc,
            link: "https://urc.promokna.id"
        },
        {
            id: 2,
            title: "Banyumas Adventure Ride 2025 Event Registration Site",
            tech: "Laravel, Alpinejs, TailwindCSS",
            image: bar2025,
            link: "https://bar2025.promokna.id"
        },
        {
            id: 3,
            title: "Promokna.id - Event, Brand, Business Promotion",
            tech: "Laravel, Alpinejs, TailwindCSS",
            image: promokna,
            link: "https://promokna.id"
        },
        {
            id: 4,
            title: "Intermedia Learning Management System",
            tech: "Laravel, Filament, AWS Cloud",
            image: intermedia_lms,
            link: "https://lms.intermediaamikom.org"
        },
        {
            id: 5,
            title: "Skybridge 7.9k Fun Run by PT KAI Daop 5 Purwokerto",
            tech: "HTML, CSS, PHP",
            image: skybridgefunrun,
            link: "https://skybridgefunrun.id/"
        },
        {
            id: 6,
            title: "Restorray - Find your next dining site",
            tech: "HTML, CSS, Javascript, Web Worker",
            image: restorray,
            link: "https://restorray.netlify.app"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 mt-20" id="portfolio">
            <h2 className="text-xl font-semibold tracking-widest text-gradient">PORTFOLIO</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
                {projects.map(project => (
                    <div key={project.id} className="bg-[#121827] rounded-lg border border-[#3B3B3B] hover:shadow-lg transition-shadow duration-200 shadow-blue-900 relative cursor-pointer" onClick={() => window.open(project.link)}>
                        <img src={project.image} alt={project.title} className="w-full" />
                        <div className="p-4 text-center text-xs text-white font-semibold tracking-wide">
                            <h3 className="mb-2 font-bold">{project.title}</h3>
                            <p className="text-gray-400">{project.tech}</p>
                            <a href={project.link} aria-label="Open project" className="absolute top-3 right-3 text-white hover:text-[#D94B8B]" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}