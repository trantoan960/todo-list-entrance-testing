<script setup lang="ts">
import AdInput from "../atoms/AdInput.vue";
import AdText from "../atoms/AdText.vue";

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
  value: {
    type: [Number, String, Boolean],
    required: false
  }
});
</script>

<template>
  <div class="ml-checkbox-field">
    <ad-input
      :id="id"
      :name="name"
      type="checkbox"
      :model-value="value"
      @input="$emit('change:value', ($event?.target as HTMLInputElement).value)"
    ></ad-input>
    <ad-text tag="label" :for="id" class="ml-label ml-label-checkbox">{{
      label
    }}</ad-text>
  </div>
</template>
