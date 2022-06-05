<script setup lang="ts">
import Icon from "./icons/Icon.vue";
import Toggle from "./Toggle.vue";

defineProps<{
    /** TODO: Name of the icon? */
    icon: 'house' | 'pizza'
    /** Ex.: "Worked from home" */
    label: string
    /** Whether toggled on or off */
    isActive: boolean
    /** Different types only differs in background colors */
    type: 'info' | 'success'
}>();
</script>

<template>
    <div
        class="badge-item-wrapper"
        :class="{info: type === 'info', success: type === 'success'}"
    >
        <Icon :iconName="icon" />
        <h4 class="label">
            {{ label }}
        </h4>
        <Toggle :isActive="isActive" />
    </div>
</template>

<style scoped>

.badge-item-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: unset;
    padding: 20px 16px;
    border-radius: 8px;
    border: var(--card-border);
    box-shadow: var(--card-box-shadow);
    background: var(--gradient-disabled);
}

.badge-item-wrapper.info {
    background: var(--gradient-information);
}

.badge-item-wrapper.success {
    background: var(--gradient-success);
}

.badge-item-wrapper .label {
    color: rgba(0, 0, 0, 0.6);
}

</style>