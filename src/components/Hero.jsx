import profile from '../assets/iwan_square_transparent.png';

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div
                class="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#D94B8B]/20 to-[#5B7ED7]/20 blur-3xl -z-10">
            </div>
            <div className="flex-1 max-w-lg">
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                    <span className="text-gradient">WEB</span><br />
                    <span className="text-gradient">DEVELOPER</span>
                </h1>
                <p className="mt-6 text-sm font-normal leading-relaxed">
                    I am Iwan Haryatno - a passionate <a href="#" className="text-[#5B7ED7] underline hover:text-[#D94B8B]">web developer</a> who creates responsive and beautiful websites.
                </p>
                <button className="mt-6 px-6 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#5B7ED7] to-[#D94B8B] hover:from-[#3B9FFF] hover:to-[#D94B8B] transition-all duration-500 shadow-[0_0_10px_#3B9FFF]">
                    VIEW MY WORK
                </button>
            </div>
            <div className="flex-1 max-w-[320px] md:max-w-[400px] relative rounded-full overflow-hidden">
                <img alt="Portrait of Iwan Haryatno" className="w-full" src={profile} />
            </div>
        </section>
    );
}