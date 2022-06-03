<script setup lang="ts">
import ExcerciseItem from "../excercise-item/ExcerciseItem.vue";
</script>

<template>
<div>
    <h2>
        Excercises
    </h2>

    <div class="list">
        <ExcerciseItem
            excercise-name="Neutral grip pull-ups"
            :sets-count="2"
            :total-reps="12"
            :max-reps="7"
        />

        <ExcerciseItem
            excercise-name="Jumping jacks"
            :sets-count="2"
            :total-reps="450"
            :max-reps="250"
        />

        <ExcerciseItem
            excercise-name="Push ups"
            :sets-count="3"
            :total-reps="90"
            :max-reps="35"
        />
    </div>
</div>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>