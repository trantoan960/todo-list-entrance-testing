<script setup lang="ts">
import useFlash from "../../uses/useFlash"

const { state } = useFlash();
</script>

<template>
  <div class="ml-flash" v-if="state.isActive">
    <span class="text-danger">{{ state.message }}</span>
  </div>
</template>
