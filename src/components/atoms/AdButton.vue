<script setup lang="ts">import { PropType } from '@vue/runtime-core';
type ButtonTypes = "button" | "submit" | "reset" | undefined

defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    required: true,
    default: 'button',
    validator: (value: string) => {
      const _buttonTypes = ['submit', 'button', 'reset'];
      return _buttonTypes.includes(value)
    }
  }
})
</script>

<template>
  <button class="ad-button" :type="type">
    <slot />
  </button>
</template>