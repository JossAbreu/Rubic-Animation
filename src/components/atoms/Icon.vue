<script setup lang="ts">
import { Icon } from "../../shared/interfaces/icon.interface";
withDefaults(defineProps<Icon>(), {});
</script>

<template>
  <i
    :class="[
      IconType ? 'material-symbols-' + IconType : 'material-symbols-rounded',
      IconFill ? 'fill' : '',
    ]"
  >
    <span :class="IconClass ? IconClass : 'text-white text-3xl fill-current'">{{
      IconName ? IconName : "more_horiz"
    }}</span>
  </i>
</template>

<style scoped>
.fill {
  font-variation-settings: "FILL" 1 !important;
}
</style>
