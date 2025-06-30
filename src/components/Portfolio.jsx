export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "UNSOED Running Community Jersey Shop",
            tech: "Laravel, Alpinejs, TailwindCSS",
            image: "https://storage.googleapis.com/a1aa/image/2df4c20e-1daa-4543-f6b0-4e1811349dba.jpg ",
            link: "https://urc.promokna.id "
        },
        // Add other projects...
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 mt-20" id="portfolio">
            <h2 className="text-xl font-semibold tracking-widest text-gradient">PORTFOLIO</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
                {projects.map(project => (
                    <div key={project.id} className="bg-[#121827] rounded-lg border border-[#3B3B3B] overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
                        <img src={project.image} alt={project.title} className="w-full" />
                        <div className="p-4 text-center text-xs text-white font-semibold tracking-wide">
                            {project.title}<br /><small>{project.tech}</small>
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