<script setup lang="ts">
import AdText from "../atoms/AdText.vue";
import AdTextarea from "../atoms/AdTextarea.vue";

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
  placeholder: {
    type: String,
    required: false,
    default: null,
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
    <ad-textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      type="text"
    ></ad-textarea>
  </div>
</template>
