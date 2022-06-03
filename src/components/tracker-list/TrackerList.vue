<script setup lang="ts">
import TrackerItem from "../tracker-item/TrackerItem.vue";
</script>

<template>
<div>
    <h2>
        Trackers
    </h2>

    <div class="list">
        <TrackerItem
            name="Coffee"
            description="How many cups of coffee did you drink today?"
            measurement="Cups"
            quantity="2"
        />

        <TrackerItem
            name="Chocos"
            description="How many pieces of black chocolate did you eat today?"
            measurement="Pieces"
            quantity="2"
        />

        <TrackerItem
            name="F/S"
            description="How many times did you dance today?"
            measurement="Times"
            quantity="1"
        />

        <TrackerItem
            name="Candy"
            description="How many grams of candy did you have today?"
            measurement="Grams"
            quantity="> 100 g"
        />
    </div>
</div>
</template>

<style scoped>

.list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
}
</style>