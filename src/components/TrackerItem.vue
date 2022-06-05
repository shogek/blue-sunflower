<script setup lang="ts">
defineProps<{
    /** Ex.: "Coffee" */
    name: string
    /** Ex.: "How many cups of coffee did you drink today?" */
    description: string
    /** Ex.: "Cups" (because I drank coffee from cups) */
    measurement: string
    /** Ex.: 2 (because I drank 2 cups of coffee today) */
    quantity: string
}>();
</script>

<template>
    <div class="wrapper">
        <h3>{{ name }}</h3>

        <p class="description">{{ description }}</p>

        <div class="counter">
            <span>{{ measurement }}</span>
            <span>{{ quantity }}</span>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    --gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap);
    width: 47.8%;
    width: calc((100% - var(--gap)) / 2);
    padding: 16px;
    border-radius: 8px;
    border: var(--card-border);
    box-shadow: var(--card-box-shadow);
}

.description {
    line-height: 1;
    font-weight: 500;
    color: var(--color-subheading)
}

.counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    border-radius: 16px;
    background: var(--gradient-information);
    color: var(--color-heading);
}

.counter span {
    font-weight: 500;
    font-size: 0.8rem;
}
</style>