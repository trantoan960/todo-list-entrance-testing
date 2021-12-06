<script setup lang="ts">
import type { AccordionItemsTypes } from "../../types";

import AdButton from "../atoms/AdButton.vue";
import AdRow from "../atoms/AdRow.vue";
import AdText from "../atoms/AdText.vue";
import InputField from "../molecules/InputField.vue";
import AccordionField from "../molecules/AccordionField.vue";
import CheckboxField from "../molecules/CheckboxField.vue";
import TaskForm from "./TaskForm.vue";
import RecordAlert from "../molecules/RecordAlert.vue";
import BulkField from "../molecules/BulkField.vue";

import useTask from "../../uses/useTask";
import { onMounted, ref, computed } from "@vue/runtime-core";

const keywords = ref<string>("");
const queueActions = ref<string[]>([]);
const trackingNumber = ref<number>(1101997);

const { state, completeTask, deleteTask, fetchTasks } = useTask();

onMounted(async () => {
  await fetchTasks();
});

const tasksFiltered = computed(() => {
  if (trackingNumber.value)
    return state.tasks.filter(
      (item) =>
        !item.completed &&
        item.title.toLowerCase().includes(keywords.value.toLowerCase())
    );
  else return [];
});

async function onCompleteTasks() {
  await Promise.all(
    queueActions.value.map(async (id) => {
      await completeTask(id, true);
      queueActions.value = queueActions.value.filter(item => item !== id);
    })
  );
  await fetchTasks();
  trackingNumber.value = Math.floor(Math.random() * (1101998 - 11 + 1) + 11);
}

function onToggleDetailTask(id: string) {
  console.log("accordion: ", id);
}

function onDeleteTask(id: string) {
  const option = confirm("Are you sure?");
  if (option) deleteTask(id);
}

async function onDeleteTasks() {
  const option = confirm("Are you sure?");
  if (option) {
    await Promise.all(queueActions.value.map(async (id: string) => {
      await deleteTask(id);
      queueActions.value = queueActions.value.filter(item => item !== id);
    }))
    await fetchTasks();
  }
}

function onSelectedTask($event: Event, id: string) {
  const value = ($event?.target as HTMLInputElement).checked;
  if (value && !queueActions.value.includes(id)) queueActions.value.push(id);
  else if (!value && queueActions.value.includes(id)) {
    const index = queueActions.value.indexOf(id);
    if (index > -1) {
      queueActions.value.splice(index, 1);
    }
  }
}
</script>

<template>
  <ad-row>
    <ad-text class="text-center" tag="h1">Todo List</ad-text>
    <ad-row
      ><input-field
        id="keywordTask"
        name="keywordTask"
        placeholder="Search..."
        type="text"
        v-model="keywords"
    /></ad-row>
    <record-alert v-if="tasksFiltered.length === 0">
      <span>No Task yet...</span>
    </record-alert>
    <ad-row v-else>
      <accordion-field id="tasks" :items="tasksFiltered" ref="hello">
        <template #header="{ item, events: { toggleTaskDetails } }: { item: AccordionItemsTypes, events: { toggleTaskDetails: any } }">
          <div class="flex justify-between p-4">
            <div class="flex items-center">
              <checkbox-field
                :id="`accordion_${item._id}`"
                :name="`accordion_${item._id}`"
                :label="item.title"
                :value="item.completed"
                @change="onSelectedTask($event, item._id as string)"
              />
            </div>
            <div class="ml-auto flex gap-4">
              <ad-button
                class="ad-button-default"
                type="button"
                @click="toggleTaskDetails(item._id as string)"
                >Detail</ad-button
              >
              <ad-button
                class="ad-button-danger"
                type="button"
                @click="onDeleteTask(item._id as string)"
                >Remove</ad-button
              >
            </div>
          </div>
        </template>
        <template #body="{ item }">
          <div class="p-4">
            <task-form :item="item" :is-has-title="false" />
          </div>
        </template>
      </accordion-field>
    </ad-row>

    <bulk-field
      v-show="queueActions.length > 0"
      :quantity="queueActions.length"
    >
      <template #actions>
        <ad-button
          class="ad-button-success"
          type="button"
          @click="onCompleteTasks"
          >Done</ad-button
        >
        <ad-button class="ad-button-danger" type="button" @click="onDeleteTasks"
          >Remove</ad-button
        >
      </template>
    </bulk-field>
  </ad-row>
</template>
