<script setup="{ emi }" lang="ts">
import { ref, PropType, watch } from "@vue/runtime-core";

import type { AccordionItemsTypes } from '../../types'

import AdButton from "../atoms/AdButton.vue";
import AdRow from "../atoms/AdRow.vue";
import AdText from "../atoms/AdText.vue";
import InputField from "../molecules/InputField.vue";
import SelectField, { SelectOptionsTypes } from "../molecules/SelectField.vue";
import TextareaField from "../molecules/TextareaField.vue";

import useTask from '../../uses/useTask'
import RecordAlert from "../molecules/RecordAlert.vue";

const priorityOptions = ref<SelectOptionsTypes[]>([
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "High",
    value: "high",
  },
]);

const props = defineProps({
  item: {
    type: Object as PropType<AccordionItemsTypes>,
    required: true
  },
  isHasTitle: {
    type: Boolean,
    required: false,
    default: true
  }
})
const emits = defineEmits(['reset'])

const { createNewTask, updateTask, state } = useTask()

async function onSubmit() {
  if (props.item._id) await updateTask(props.item._id, props.item)
  else {
    await createNewTask(props.item)
    emits('reset')
  }
}
</script>

<template>
  <ad-row>
    <ad-text v-if="isHasTitle" class="text-center" tag="h1">New Task</ad-text>
    <form v-if="item" @submit.prevent="onSubmit" class="grid grid-cols-1 gap-4">
      <ad-row>
      <input-field
        id="titleTask"
        name="titleTask"
        placeholder="Add new task..."
        type="text"
        v-model="item.title"
      />
    </ad-row>
    <ad-row>
      <textarea-field id="descTask" name="descTask" label="Description" v-model="item.description" />
    </ad-row>
    <ad-row cols="2">
      <input-field
        id="dueDateTask"
        name="dueDateTask"
        label="Due Date"
        placeholder="Add new task..."
        type="date"
        v-model="item.dueDate"
      />
      <select-field
        id="priorityTask"
        name="priorityTask"
        label="Priority"
        :options="priorityOptions"
        v-model="item.priority"
      />
    </ad-row>
    <ad-row>
      <ad-button class="ad-button-primary" type="submit">{{ item._id ? 'Update' : 'Add' }}</ad-button>
    </ad-row>
    <ad-row>
      <record-alert>
        <span class="text-danger">{{ state.error }}</span>
      </record-alert>
    </ad-row>
    </form>
  </ad-row>
</template>
