<script setup lang="ts">import { computed } from '@vue/reactivity';

const props = defineProps({
  cols: {
    type: String,
    required: false,
    default: '1'
  },
  gap: {
    type: String,
    required: false,
    default: '4'
  }
})

const gapCols = computed(() => `gap-${props.gap}`);
const numberCols = computed(() => `grid-cols-${props.cols}`)
</script>

<template>
<div class="grid" :class="[numberCols, gapCols]">
  <slot />
</div>
</template>