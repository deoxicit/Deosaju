import React, { Suspense, useRef } from 'react';
import BentoCard from '../BentoCard';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Preload the model to avoid waterfall loading
useGLTF.preload('/models/porsche_gt3_rs.glb');

const Model = () => {
    const { scene } = useGLTF('/models/porsche_gt3_rs.glb');
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            // Horizontal rotation
            ref.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group ref={ref}>
            <primitive object={scene} scale={0.012} position={[0, -0.5, 0]} />
        </group>
    );
};

const TargetCard: React.FC = () => {
    return (
        <BentoCard className="md:col-span-1 md:row-span-2 min-h-[250px] relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-red-400">Target 2026</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-none">
                    Porsche<br /><span className="text-gray-500">911 GT3 RS</span>
                </h3>
            </div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [4, 2, 4] }}>
                    <Suspense fallback={null}>
                        {/* Lighting setup for dramatic look */}
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                        <Stage environment="city" intensity={0.6}>
                            <Model />
                        </Stage>

                        <OrbitControls
                            enableZoom={false}
                            minPolarAngle={Math.PI / 3}
                            maxPolarAngle={Math.PI / 2.5}
                            enablePan={false}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </BentoCard>
    );
};

export default TargetCard;
