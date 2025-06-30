export default function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-3 gap-12" id="contact">
            <div className="space-y-4">
                <p className="text-xs font-semibold tracking-widest text-[#8B6CC6]">DO YOU HAVE A PROJECT TO <span className="text-[#D94B8B]">DISCUSS?</span></p>
                <h3 className="text-white text-2xl font-semibold tracking-widest flex items-center space-x-2">
                    <span>GET IN TOUCH</span><i className="far fa-comment-alt"></i>
                </h3>
                <div className="text-xs text-[#8B8B8B]">
                    <p className="font-semibold">EMAIL</p>
                    <a className="text-[#5B7ED7] hover:text-[#D94B8B]" href="mailto:iwanharyatno1@gmail.com">iwanharyatno1@gmail.com</a>
                </div>
                <div className="text-xs text-[#8B8B8B]">
                    <p className="font-semibold">SOCIAL MEDIA</p>
                    <div className="flex space-x-4 mt-1 text-[#5B7ED7]">
                        <a href="https://www.linkedin.com/in/iwanharyatno "><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://instagram.com/_iwan.h "><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/6288232400859 "><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <form action="#" method="POST" className="md:col-span-2 space-y-6">
                <h3 className="text-xs font-semibold tracking-widest text-[#8B8B8B]">CONTACT FORM</h3>
                <Input label="Name" name="name" required />
                <Input label="Email" name="email" type="email" required />
                <TextArea label="Message" name="message" rows="3" required />
                <button type="submit" className="px-6 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#5B7ED7] to-[#D94B8B] hover:from-[#3B9FFF] hover:to-[#D94B8B] transition-all duration-500 shadow-[0_0_10px_#3B9FFF]">
                    SEND MESSAGE
                </button>
            </form>
        </section>
    );
}

function Input({ label, name, type = "text", required = false }) {
    return (
        <div>
            <label htmlFor={name} className="block text-xs font-semibold mb-1 text-[#8B8B8B]">{label}</label>
            <input type={type} id={name} name={name} required={required} className="w-full rounded-md bg-[#121827] border border-[#3B3B3B] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#5B7ED7]" />
        </div>
    );
}

function TextArea({ label, name, rows = 3, required = false }) {
    return (
        <div>
            <label htmlFor={name} className="block text-xs font-semibold mb-1 text-[#8B8B8B]">{label}</label>
            <textarea id={name} name={name} rows={rows} required={required} className="w-full rounded-md bg-[#121827] border border-[#3B3B3B] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#5B7ED7]"></textarea>
        </div>
    );
}