export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 border border-[#3B3B3B] rounded-full shadow-md bg-white/5 backdrop-blur-xs sticky top-4 z-50">
            <div className="text-xs font-normal tracking-widest uppercase">Iwan Haryatno</div>
            <ul className="hidden sm:flex space-x-6 text-xs font-normal tracking-widest text-[#8B8B8B] uppercase">
                <li><a className="hover:text-[#D94B8B] transition-colors duration-300" href="#services">SERVICES</a></li>
                <li><a className="hover:text-[#D94B8B] transition-colors duration-300" href="#technologies">TECHNOLOGIES</a></li>
                <li><a className="hover:text-[#D94B8B] transition-colors duration-300" href="#portfolio">PORTFOLIO</a></li>
                <li><a className="hover:text-[#D94B8B] transition-colors duration-300" href="#contact">CONTACT</a></li>
            </ul>
            <button className="flex items-center space-x-1 border border-[#3B3B3B] rounded-full px-3 py-1 text-xs font-normal tracking-widest">
                <span>ENG</span>
                <i className="fas fa-globe-americas text-xs"></i>
            </button>
        </nav>
    );
}