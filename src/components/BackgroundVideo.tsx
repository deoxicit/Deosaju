import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { motion } from 'framer-motion';

const BackgroundVideo: React.FC = () => {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <>
            {/* Video Background Layer */}
            <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black">
                {/* 
                    Overlay to darken video and ensure text readability. 
                    Also prevents clicking on the video (pausing it).
                 */}
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none opacity-60">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=IUN-bVQ-KXI"
                        playing={true}
                        loop={true}
                        muted={isMuted}
                        width="100%"
                        height="100%"
                        controls={false}
                        config={{
                            playerVars: {
                                showinfo: 0,
                                modestbranding: 1,
                                controls: 0,
                                disablekb: 1,
                                fs: 0,
                                iv_load_policy: 3,
                                playlist: 'IUN-bVQ-KXI', // Required for looping
                            }
                        }}
                    />
                </div>
            </div>

            {/* Mute/Unmute Toggle Button - Top Right */}
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                onClick={() => setIsMuted(!isMuted)}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            >
                {isMuted ? (
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.75-4.75H9a5.25 5.25 0 000 10.5h.75l-4.75-4.75m0 0l4.75 4.75H9a5.25 5.25 0 01-4.75-4.75v-1.5" />
                        </svg>
                    </div>
                ) : (
                    <div className="relative">
                        {/* Sound Wave Animation */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.75-4.75H9a5.25 5.25 0 000 10.5h2.5l-4.75-4.75z" />
                        </svg>
                    </div>
                )}
            </motion.button>
        </>
    );
};

export default BackgroundVideo;
