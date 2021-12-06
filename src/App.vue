<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import type { AccordionItemsTypes } from "./types";
import TaskForm from "./components/organisms/TaskForm.vue";
import TasksForm from "./components/organisms/TasksForm.vue";
import AdRow from "./components/atoms/AdRow.vue";
import FlashNotification from "./components/molecules/FlashNotification.vue";

const defaultTask = ref<AccordionItemsTypes>({
  title: "",
  description: "",
  dueDate: new Date().getTime(),
  priority: "normal",
  completed: false,
});
</script>

<template>
  <ad-row cols="2" sm-cols="1" class="layout container">
    <task-form
      :item="defaultTask"
      @reset="
        defaultTask = {
          title: '',
          description: '',
          dueDate: new Date().getTime(),
          priority: 'normal',
          completed: false,
        }
      "
    />
    <tasks-form />
  </ad-row>
  <flash-notification message="hello ca nha" />
</template>
