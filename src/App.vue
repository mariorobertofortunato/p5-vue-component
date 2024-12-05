<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import P5 from '@/components/P5Component.vue'
const p5ComponentContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
const containerHeight = ref(0)

onMounted(() => {
  containerWidth.value = p5ComponentContainer.value?.offsetWidth || 0
  containerHeight.value = p5ComponentContainer.value?.offsetHeight || 0
})

// Watch for container size changes and update width/height dynamically
watch(
  [() => p5ComponentContainer.value?.offsetWidth, () => p5ComponentContainer.value?.offsetHeight],
  () => {
    containerWidth.value = p5ComponentContainer.value?.offsetWidth || 0
    containerHeight.value = p5ComponentContainer.value?.offsetHeight || 0
  },
)
</script>

<template>
  <div class="p5-component-container" id="p5-component-container" ref="p5ComponentContainer">
    <p5 :src="`../assets/sketch.js`" :width="containerWidth" :height="containerHeight"> </p5>
  </div>
</template>

<style scoped>
.p5-component-container {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 75%;
  height: 75%;
  column-gap: 0;
  border-radius: 16px;
  border-color: aqua;
  border-style: solid;
  border-width: 8px;
  overflow: hidden;
}
</style>
