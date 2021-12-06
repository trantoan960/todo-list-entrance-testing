<script setup lang="ts">
import { PropType, ref } from "@vue/runtime-core";

export type SelectOptionsTypes = {
  label: string;
  value: string;
};

defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<SelectOptionsTypes[]>,
    required: true,
  },
  modelValue: {
    type: [Number, String],
    required: false,
  },
});
</script>

<template>
  <select
    class="ad-select"
    :name="name"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
  >
    <option v-for="option in options" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
