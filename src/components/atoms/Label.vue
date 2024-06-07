<script setup lang="ts">
import { Label } from "../../shared/interfaces/label.interface";
defineProps<Label>();
</script>

<template>
  <p :class="LabelClass ? LabelClass : 'text-base text-white'">
    {{ LabelText ? LabelText : " label text" }}
  </p>
</template>
