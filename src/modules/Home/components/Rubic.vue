<template>
  <div class="grid grid-cols-2 gap-2 relative anim-cubes-initial">
    <div>
      <Image
        src="/images/Cube.png"
        class="flex w-[5rem] h-[5rem] anim-cube-lt"
      />
    </div>
    <div>
      <Image
        src="/images/Cube.png"
        class="flex w-[5rem] h-[5rem] anim-cube-tr"
      />
    </div>
    <div>
      <Image
        src="/images/Cube.png"
        class="flex w-[5rem] h-[5rem] anim-cube-lb"
      />
    </div>
    <div>
      <Image
        src="/images/Cube.png"
        class="flex w-[5rem] h-[5rem] anim-cube-br"
      />
    </div>
  </div>
  =
  <Image
    src="/images/Text.png"
    class="flex w-[20rem] absolute inset-y-0 h-[10rem] opacity-0 -translate-x-5 self-center animate-text"
  />
</template>

<script setup lang="ts">
import Image from "@atoms/Image.vue";
</script>

<style scoped>
.anim-cubes-initial {
  animation: anim-initial 800ms linear forwards,
    cube-br 900ms 1400ms linear forwards;
}
.anim-cube-lt {
  animation: cube-lt 1s 300ms normal, hide-cub 1s 3000ms normal forwards;
}
.anim-cube-tr {
  animation: cube-tr 1s 400ms normal, pulse-tr 700ms 2000ms linear forwards;
}
.anim-cube-br {
  animation: cube-br 1s 400ms normal, pulse-br 700ms 2300ms linear forwards;
}
.anim-cube-lb {
  animation: cube-lb 1s 300ms normal, pulse-lb 700ms 2600ms linear forwards;
}
.animate-text {
  animation: anim-text 1s 1800ms alternate forwards,
    pulse-text 700ms 2600ms linear forwards;
}

@keyframes anim-text {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  20% {
    opacity: 0.1;
  }
  100% {
    transform: translateX(60px);
    opacity: 1;
  }
}
@keyframes cube-lt {
  0% {
    transform: translateX(0%) rotate(0deg) scale(1);
  }
  100% {
    transform: translateX(110%) rotate(270deg) scale(1);
  }
}
@keyframes cube-tr {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(110%);
  }
}

@keyframes cube-br {
  0% {
    transform: translateX(0%) rotate(0deg);
  }
  100% {
    transform: translateX(-110%) rotate(270deg);
  }
}
@keyframes cube-lb {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-110%);
  }
}
@keyframes anim-initial {
  0% {
    transform: rotateX(0deg) rotateY(180deg) scale(0);
  }
  40% {
    transform: rotateX(180deg) rotateY(180deg) scale(1.4);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) scale(1);
  }
}

@keyframes hide-cub {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
@keyframes pulse-tr {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse-br {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse-lb {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse-text {
  0% {
    transform: translateX(60px) scale(1);
  }
  50% {
    transform: translateX(60px) scale(1.1);
  }
  100% {
    transform: translateX(60px) scale(1);
  }
}
</style>
