import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    gridArea?: string;
    noHover?: boolean;
    onClick?: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', gridArea, onClick, noHover = false }) => {
    return (
        <motion.div
            whileHover={noHover ? undefined : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative overflow-hidden rounded-3xl border border-glass-border bg-glass backdrop-blur-xl p-6 shadow-xl transition-all duration-300 ${noHover ? '' : 'hover:bg-glass-hover hover:border-white/20 group'} ${className}`}
            style={{ gridArea }}
            onClick={onClick}
        >
            {/* Noise Texture Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-20 bg-noise mix-blend-overlay" />

            {/* Glow Effect on Hover */}
            {!noHover && (
                <div className="absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-azure-blue/20 to-neon-purple/20 blur-md -z-10" />
            )}

            {/* Content */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default BentoCard;
