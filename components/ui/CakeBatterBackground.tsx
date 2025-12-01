import * as React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying vec2 vUv;

  // Simple noise function
  vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

  void main() {
    vec2 p = vUv * 3.0; // Scale texture
    
    // Animate coordinates to create "stirring" motion
    float t = uTime * 0.4;
    p.x += sin(p.y * 2.0 + t) * 0.5;
    p.y += cos(p.x * 2.0 + t * 0.8) * 0.5;

    // Create soft, dough-like waves
    float wave = sin(p.x * 3.0 + p.y * 2.0);
    
    // Add a second layer of detail
    wave += sin(p.x * 5.0 - t) * 0.3;
    
    // Soften margins (0 to 1)
    wave = wave * 0.5 + 0.5;

    // Mix the cream and caramel colors
    // We add a subtle highlight for a "glossy" texture
    vec3 col = mix(uColor1, uColor2, wave);
    
    // Add subtle specular highlight
    float highlight = pow(wave, 4.0) * 0.1;
    col += vec3(highlight);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const BatterPlane = () => {
  const mesh = React.useRef<THREE.Mesh>(null);
  
  const uniforms = React.useMemo(
    () => ({
      uTime: { value: 0 },
      // #FFF8E1 (Cream) to #EAA95A (Caramel/Gold)
      uColor1: { value: new THREE.Color("#FFF8E1") },
      uColor2: { value: new THREE.Color("#FADFB7") },
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      // Pass time to shader
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh}>
      {/* Plane covers the view */}
      <planeGeometry args={[10, 10, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export const CakeBatterBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 2] }} resize={{ scroll: false }}>
        <BatterPlane />
      </Canvas>
    </div>
  );
};
