<script setup lang="ts">
import { ref } from 'vue';
import Icon from "./icons/Icon.vue";
import Toggle from "./Toggle.vue";

const props = defineProps<{
    /** TODO: Name of the icon? */
    icon: 'house' | 'pizza'
    /** Ex.: "Worked from home" */
    label: string
    /** Whether toggled on or off */
    isEnabled: boolean
    /** Different types only differs in background colors */
    type: 'info' | 'success'
}>();

function handleToggle() {
    isOn.value = !isOn.value;
}

const isOn = ref(props.isEnabled);
</script>

<template>
    <div
        class="badge-item-wrapper"
        :class="{
            disabled: !isOn,
            info: type === 'info' && isOn,
            success: type === 'success' && isOn
    }">
        <div class="group">
            <Icon :iconName="icon" />
            <h4 class="label">
                {{ label }}
            </h4>
        </div>
        <Toggle :isEnabled="isOn" :isTransparent="true" @toggle="handleToggle" />
    </div>
</template>

<style scoped>

.badge-item-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: unset;
    padding: 20px 20px;
    border-radius: 8px;
    border: var(--badge-border);
    box-shadow: var(--badge-box-shadow);
    background: var(--gradient-disabled);
}

.badge-item-wrapper .group {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.badge-item-wrapper.disabled {
    background: var(--gradient-disabled);
}

.badge-item-wrapper.info {
    background: var(--gradient-information);
}

.badge-item-wrapper.success {
    background: var(--gradient-success);
}

.badge-item-wrapper .label {
    color: var(--badge-text-color);
}

</style>