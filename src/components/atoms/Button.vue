<script setup lang="ts">
import type { Button } from "../../shared/interfaces/button.interface";

const colors = {
  primary: "bg-primary",
  default: "bg-accent",
  transparent: "bg-transparent",
} as const;

withDefaults(defineProps<Button>(), {
  ButtonText: "Text Button",
  ButtonClass:
    "w-max h-max px-6 py-2 text-center text-clr-text-active rounded shadow hover:opacity-75 hover:opacity-75 hover:scale-105 transition ease-in-out justify-center",
  ButtonColor: "default",
});
</script>

<template>
  <button :class="[colors[ButtonColor], ButtonClass]">
    {{ ButtonText }}
  </button>
</template>
