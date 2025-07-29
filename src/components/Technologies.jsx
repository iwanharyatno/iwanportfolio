import html from '../assets/skills/html.svg';
import css3 from '../assets/skills/css3.svg';
import javascript from '../assets/skills/javascript.svg';
import nodejs from '../assets/skills/nodejs.svg';
import tailwindcss from '../assets/skills/tailwindcss.svg';
import php from '../assets/skills/php.svg';
import laravel from '../assets/skills/laravel.svg';
import react from '../assets/skills/react.svg';
import mariadb from '../assets/skills/mariadb.svg';
import mongodb from '../assets/skills/mongodb.svg';
import aws from '../assets/skills/aws.svg';
import { motion } from 'motion/react';

export default function Technologies() {
    const logos = [
        html,
        css3,
        javascript,
        nodejs,
        tailwindcss,
        php,
        laravel,
        react,
        mariadb,
        mongodb,
        aws
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 mt-20" id="technologies">
            <h2 className="text-xl font-semibold tracking-widest text-gradient">SKILLS</h2>
            <p className="mt-4 text-sm text-gray-400">Tools and technologies I use:</p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 max-w-lg mx-auto">
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <img alt="Tech Logo" className="w-14 h-14" src={logo} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}