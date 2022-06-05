<script setup lang="ts">

defineProps<{
  /** Ex.: "Neutral grip pull-ups" */
  excerciseName: string
  /** Ex.: 2 (because I performed the excercise 2 times today) */
  setsCount: number
  /** Ex.: 12 (because my first set consisted of 7 reps, and the second - 5 reps) */
  totalReps: number
  /** Ex.: 7 (because in all the other sets I performed <= reps) */
  maxReps: number
}>();

</script>

<template>

<div class="wrapper">
  <h4> {{ excerciseName }} </h4>

  <div class="details">
    <p>
      <span class="number"> {{ setsCount }} </span>
      <span class="text"> sets </span>
    </p>

    <div class="divider" />

    <p>
      <span class="number"> {{ totalReps }} </span>
      <span class="text"> total </span>
    </p>
    <div class="divider" />
    <p>
      <span class="number"> {{ maxReps }} </span>
      <span class="text"> max </span>
    </p>
  </div>
</div>

</template>

<style scoped>


.wrapper {
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  border: var(--card-border);
  box-shadow: var(--card-box-shadow);
}

.details {
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.divider {
  height: 1rem;
  width: 1px;
  background: var(--gradient-information);
}

.number {
  color: var(--color-heading);
  font-weight: bold;
}

.text {
  color: var(--color-subheading);
}

</style>
