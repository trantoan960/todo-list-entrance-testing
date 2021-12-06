<script setup lang="ts">
import AdButton from '../atoms/AdButton.vue';
import AdText from '../atoms/AdText.vue';
import AdRow from '../atoms/AdRow.vue';

defineProps({
  quantity: {
    type: Number,
    default: 0
  }
})
</script>

<template>
<ad-row class="fixed bottom-0 left-0 w-full p-4 bg-white border border-t border-gray-300">
  <div class="flex items-center justify-between">
    <ad-text tag="span">{{ quantity }} {{ quantity > 1 ? 'items' : 'item' }} selected</ad-text>
    <div class="flex items-center justify-end gap-4">
      <slot name="actions" />
    </div>
  </div>
</ad-row>
</template>