import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./Particles.module.scss";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initParticles();
  }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <>
      {init && (
        <Particles
          className={styles.particle}
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 6,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#4d7e86",
              },
              links: {
                color: "#4d7e86",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
