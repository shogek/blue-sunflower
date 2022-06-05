<script setup lang="ts">
import IconPizza from './IconPizza.vue';
import IconHouse from './IconHouse.vue';

defineProps<{
    iconName: 'house' | 'pizza'
}>();
</script>

<template>
    <component :is="iconName === 'house' ? IconHouse : IconPizza" />
</template>