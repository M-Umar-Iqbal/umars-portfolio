import React, { useEffect } from 'react';
import particlesConfig from "../particles-config.json";
const ParticlesComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadParticlesJS = async () => {
        await import('particles.js');
        window.particlesJS('particles-js', particlesConfig
        );
      };
      loadParticlesJS();
    }
  }, []);

  return <div id="particles-js" style={{ height: "100%", width: "100%" }} />;
};
export default ParticlesComponent;
