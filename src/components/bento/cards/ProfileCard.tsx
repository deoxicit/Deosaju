import React from 'react';
import BentoCard from '../BentoCard';
import { motion } from 'framer-motion';

const ProfileCard: React.FC = () => {
    const [copied, setCopied] = React.useState(false);

    return (
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-50">
                {/* Abstract/Geometric BG decoration */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-azure-blue to-neon-purple blur-3xl opacity-20" />
            </div>

            <div className="z-10 mt-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 mb-4 overflow-hidden relative">
                    <img src="https://github.com/d3osaju.png" alt="Deo Saju" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Hello, I'm Deo Saju
                </h2>
                <div className="mt-2 text-sm text-gray-400 space-y-1">
                    <p className="font-medium text-gray-300">
                        .NET Developer • Enterprise Applications • Cloud Solutions • Microservices Architect
                    </p>
                    <p className="opacity-80">
                        Building scalable solutions at IBM.
                    </p>
                </div>
            </div>

            <div className="z-10 mt-6 flex gap-3">
                <motion.a
                    href="https://github.com/d3osaju/d3osaju/blob/main/Resume.pdf"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors inline-block text-center pt-2.5"
                >
                    View Resume
                </motion.a>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        navigator.clipboard.writeText('deosaju2260@gmail.com');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                >
                    {copied ? 'Copied!' : 'Copy Email'}
                </motion.button>
            </div>
        </BentoCard>
    );
};

export default ProfileCard;
