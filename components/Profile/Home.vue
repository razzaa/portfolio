<template>
  <div>
    <section class="home" id="home">
      <div class="content">
        <img class="tilt" src="images/home-pic.JPG" alt="" />
        <h3>ali <span>raza</span></h3>
        <p>i am a <span class="typing-text"> full stack developer </span></p>
        <a href="#about" class="btn">about me</a>
      </div>
    </section>
    <Particles
      id="tsparticles"
      height="{window.outerHeight}"
      :options="{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#1a6183',
          },
          links: {
            color: '#1a6183',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>

<script>
export default {};
</script>