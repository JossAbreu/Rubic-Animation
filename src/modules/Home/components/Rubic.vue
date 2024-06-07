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
  </div>

  <Image
    src="/images/Text.png"
    class="flex w-[20rem] absolute inset-y-0 h-[10rem] opacity-0 translate-x-5 self-center animate-text"
  />
</template>

<script setup lang="ts">
import Image from "@atoms/Image.vue";
</script>

<style scoped>
.anim-cubes-initial {
  animation: left 1s 900ms normal forwards;
}
.anim-cube-lt {
  animation: cube-lt 2s 300ms normal forwards;
}
.anim-cube-tr {
  animation: cube-tr 2s 300ms normal forwards;
}

.anim-cube-lb {
  animation: cube-lb 2s 300ms normal forwards;
}
.animate-text {
  animation: anim-text 2s 1000ms alternate forwards;
}

@keyframes anim-text {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  50% {
    transform: translateX(90px) scale(1);
    opacity: 1;
  }
  60% {
    transform: translateX(90px) scale(1.1);
    opacity: 1;
  }

  100% {
    transform: translateX(90px);
    opacity: 1;
  }
}
@keyframes cube-lt {
  0% {
    transform: translateX(0%) rotate(0deg);
  }
  40% {
    transform: translateX(110%) rotate(270deg) scale(1);
  }

  65% {
    transform: translateX(110%) rotate(270deg) scale(1.1);
  }

  100% {
    transform: translateX(110%) rotate(270deg) scale(1);
  }
}

@keyframes cube-tr {
  0% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(110%) scale(1);
  }
  90% {
    transform: translateY(110%) scale(1.02);
  }
  100% {
    transform: translateY(110%) scale(1);
  }
}

@keyframes cube-br {
  0% {
    display: flex;
  }

  100% {
    display: none;
  }
}
@keyframes cube-lb {
  0% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-110%) scale(1);
  }
  45% {
    transform: translateY(-110%) scale(1.1);
  }
  100% {
    transform: translateY(-110%) scale(1);
  }
}

@keyframes left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-110%);
  }
}
</style>
