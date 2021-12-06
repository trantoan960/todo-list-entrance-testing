<script lang="ts" setup>
import AdRow from '../atoms/AdRow.vue';

defineProps({
  text: {
    type: String,
    required: false
  }
})
</script>

<template>
<ad-row>
  <slot />
</ad-row>
</template>