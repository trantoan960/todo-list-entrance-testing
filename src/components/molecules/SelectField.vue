<script setup lang="ts">
import { PropType } from "vue";

import AdText from "../atoms/AdText.vue";
import AdSelect from "../atoms/AdSelect.vue";

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
  label: {
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
  <div class="m-textarea-field">
    <ad-text tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
    <ad-select
      :id="id"
      :name="name"
      :options="options"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
    ></ad-select>
  </div>
</template>
