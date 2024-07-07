import React, { useEffect } from 'react';
import particlesConfig from "../particles-config.json";

const ParticlesComponent: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadParticlesJS = async () => {
        const { particlesJS } = await import('particles.js');
        (window as any).particlesJS('particles-js', particlesConfig);
      };
      loadParticlesJS();
    }
  }, []);

  return <div id="particles-js" style={{ height: "100%", width: "100%" }} />;
};

export default ParticlesComponent;
