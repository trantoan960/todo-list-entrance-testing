<script setup lang="ts">
import { ref } from "@vue/runtime-core";

defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: null
  },
  modelValue: {
    type: [Number, String],
    required: false
  }
});
</script>

<template>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
    class="ad-textarea"
    rows="6"
  ></textarea>
</template>