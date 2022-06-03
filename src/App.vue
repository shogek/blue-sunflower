<script setup lang="ts">
import ExcerciseList from './components/excercise-list/ExcerciseList.vue';
import TrackerList from './components/tracker-list/TrackerList.vue';
</script>

<template>
  <div class="wrapper">
    <TrackerList />
    <ExcerciseList />
  </div>
</template>

<style>
@import '@/assets/base.css';
@import '@/styles/colors.css';

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
}
</style>
