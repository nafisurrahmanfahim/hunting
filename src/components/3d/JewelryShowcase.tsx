import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshTransmissionMaterial, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Luxury ring component
function LuxuryRing() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={ringRef}>
        {/* Main ring band */}
        <Torus args={[1, 0.15, 32, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.95}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </Torus>

        {/* Diamond setting */}
        <mesh position={[0, 0.35, 0]}>
          <octahedronGeometry args={[0.25, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.95}
            roughness={0.0}
            thickness={0.5}
            ior={2.4}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.2}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
          />
        </mesh>

        {/* Small accent diamonds */}
        {[-0.4, 0.4].map((x, i) => (
          <mesh key={i} position={[x, 0.2, 0]} scale={0.5}>
            <octahedronGeometry args={[0.1, 0]} />
            <MeshTransmissionMaterial
              backside
              samples={8}
              resolution={256}
              transmission={0.9}
              roughness={0.0}
              thickness={0.3}
              ior={2.4}
              color="#ffffff"
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <mesh>
      <torusGeometry args={[1, 0.15, 16, 50]} />
      <meshBasicMaterial color="#d4af37" wireframe />
    </mesh>
  );
}

const JewelryShowcase = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square rounded-3xl glass-card overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={<LoadingFallback />}>
                <ambientLight intensity={0.5} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.3}
                  penumbra={1}
                  intensity={1.5}
                  castShadow
                />
                <pointLight position={[-10, -10, -10]} color="#4169e1" intensity={0.5} />
                <LuxuryRing />
                <Environment preset="studio" />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-widest text-sm mb-4 block"
            >
              Interactive Experience
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
            >
              The <span className="text-gradient-gold">Celestial</span> Ring
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Experience our signature piece in stunning 3D. Drag to rotate and explore 
              every facet of this masterpiece. The Celestial Ring features a 2-carat 
              brilliant-cut diamond set in 18K gold with accent diamonds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              {[
                { label: 'Material', value: '18K Yellow Gold' },
                { label: 'Center Stone', value: '2ct Brilliant Diamond' },
                { label: 'Clarity', value: 'VVS1' },
                { label: 'Price', value: '$12,500' },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold rounded-full"
              >
                Reserve Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-gold rounded-full"
              >
                Book Viewing
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryShowcase;
