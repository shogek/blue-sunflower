<script setup lang="ts">
import ExcerciseList from './components/ExcerciseList.vue';
import TrackerList from './components/TrackerList.vue';
import BadgeList from './components/BadgeList.vue';
</script>

<template>
  <div class="wrapper">
    <BadgeList />
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
