declare module 'particles.js' {
    interface ParticlesConfig {
      /* Define the shape of your particlesConfig object here based on your particles-config.json */
      particles: any;
      interactivity: any;
      [key: string]: any;
    }
    export function particlesJS(
      tagId: string,
      params: ParticlesConfig,
      callback?: () => void
    ): void;
  }