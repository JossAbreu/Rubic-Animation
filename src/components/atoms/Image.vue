<script setup lang="ts">
import { Img } from "../../shared/interfaces/img.interface";

withDefaults(defineProps<Img>(), {});
</script>
<template>
  <img
    :src="src ? src : ''"
    :alt="alt ? alt : 'PlaceHolder Img'"
    :class="ImgClass ? ImgClass : ''"
  />
</template>

<style scoped></style>
