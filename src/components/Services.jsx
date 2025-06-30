import { faCode, faServer, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-20 space-y-12" id="services">
            <h2 className="text-xl font-semibold tracking-widest text-gradient">MY SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                    icon={<FontAwesomeIcon icon={faCode} />}
                    title="Frontend Development"
                    description="Creating pixel-perfect, responsive websites and user interfaces using HTML, CSS, JavaScript, React, and modern frameworks."
                />
                <ServiceCard
                    icon={<FontAwesomeIcon icon={faServer} />}
                    title="Backend Development"
                    description="Building robust backend systems with APIs, databases, authentication, and server logic using Node.js, PHP, Python, or other technologies."
                />
                <ServiceCard
                    icon={<FontAwesomeIcon icon={faTools} />}
                    title="DevOps & Deployment"
                    description="Setting up CI/CD pipelines, cloud hosting, containerization (Docker), domain setup, and performance optimization for fast and reliable deployments."
                />
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, description }) {
    return (
        <div className="border border-[#3B3B3B] rounded-lg p-6 space-y-2 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-2 text-[#5B7ED7]">
                {icon}
                <h3 className="text-white font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-xs text-[#8B8B8B] leading-tight">{description}</p>
        </div>
    );
}