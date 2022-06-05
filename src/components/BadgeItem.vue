<script setup lang="ts">
import Icon from "./icons/Icon.vue";

defineProps<{
    /** TODO: Name of the icon? */
    icon: 'house' | 'pizza'
    /** Ex.: "Worked from home" */
    label: string
    /** Whether toggled on or off */
    isEnabled: boolean
}>();
</script>

<template>
    <div class="wrapper">
        <div>
            <Icon :name="icon" />
        </div>
        <p class="label">
            {{ label }}
        </p>
        <div v-if="isEnabled">
            ON
        </div>
        <div v-else>
            OFF
        </div>
    </div>
</template>

<style scoped>

.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: var(--card-border);
    box-shadow: var(--card-box-shadow);
    background: var(--gradient-disabled);
}

.label {
    color: var(--color-heading);
}

</style>