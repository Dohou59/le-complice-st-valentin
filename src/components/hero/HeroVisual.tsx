"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model(props: any) {
    const { scene } = useGLTF("/Hero.glb");
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            // Continuous elegant rotation
            ref.current.rotation.y += delta * 0.2;
        }
    });

    return <primitive object={scene} ref={ref} {...props} />;
}

export default function HeroVisual() {
    return (
        <div className="w-full h-[280px] md:h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }} shadows>
                {/* Soft, studio-like lighting configuration */}
                <ambientLight intensity={0.4} />
                <spotLight
                    position={[5, 8, 5]}
                    angle={0.25}
                    penumbra={1}
                    intensity={1.0}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <pointLight position={[-10, 0, -5]} intensity={0.3} color="#F5E6D3" />

                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[-0.05, 0.05]}>
                        {/* Balanced position */}
                        <Model scale={2.8} position={[0, -0.6, 0]} />
                    </Float>
                    <Environment preset="studio" />
                    <ContactShadows
                        position={[0, -1, 0]}
                        opacity={0.2}
                        scale={8}
                        blur={2}
                        color="#5D0016"
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload("/Hero.glb");
