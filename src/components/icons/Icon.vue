<script setup lang="ts">
import IconPizza from './IconPizza.vue';
import IconHouse from './IconHouse.vue';

defineProps<{
    iconName: string
}>();
</script>

<template>
    <component class="icon-wrapper" :is="iconName === 'house' ? IconHouse : IconPizza" />
</template>

<style scoped>

.icon-wrapper {
    width: auto;
    height: 26px;
    color: var(--icon-color);
}

</style>