<script setup lang="ts">
import { PropType, computed } from "@vue/runtime-core";

type InputTypes =
  | "date"
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | undefined;

const props = defineProps({
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
    default: null,
  },
  type: {
    type: String as PropType<InputTypes>,
    required: true,
    default: "button",
    validator: (value: string) => {
      const _inputTypes = [
        "date",
        "text",
        "email",
        "password",
        "checkbox",
        "radio",
      ];
      return _inputTypes.includes(value);
    },
  },
  modelValue: {
    type: [Number, String, Boolean],
    required: false,
  },
});

const classes = computed(() =>
  props.type === "checkbox" ? "ad-checkbox" : "ad-input"
);

const dateDefaultInput = computed(() => {
  if (props.type === "date") {
    let date;
    if (props.modelValue) {
      date = new Date(parseInt(props.modelValue as string));
    } else {
      date = new Date();
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
  } else return props.modelValue;
});
</script>

<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="dateDefaultInput"
    @input="$emit('update:value', ($event?.target as HTMLInputElement).value)"
  />
</template>
