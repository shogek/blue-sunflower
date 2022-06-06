<script setup lang="ts">
defineProps<{
    isEnabled: boolean
    /** Is the toggle being used on a badge that has a gradient background? */
    isTransparent: boolean
}>();

const emit = defineEmits<{
    (e: 'toggle'): void
}>();


function handleClick() {
    emit('toggle');
}
</script>

<template>
    <div
        class="toggle-wrapper"
        :class="{
            on: isEnabled,
            off: !isEnabled,
            transparent: isTransparent
        }"
        @click="handleClick"
    />
</template>

<style scoped>

.toggle-wrapper {
    height: 1.2em;
    width: 2.5em;
    border-radius: 15px;
    transition: all ease-in;
}

.toggle-wrapper.on {
    background-color: var(--toggle-on-background-color);
}

.toggle-wrapper.off {
    background-color: var(--toggle-off-background-color);
}

.toggle-wrapper.on.transparent {
    background-color: var(--toggle-transparent-on-background-color);
}

.toggle-wrapper.off.transparent {
    background-color: var(--toggle-transparent-off-background-color);
}

.toggle-wrapper.on::before,
.toggle-wrapper.off::before {
    content: '';
    position: absolute;
    border-radius: 100%; 
    height: 80%;
    top: 9%;
    width: 38% /* var(--toggle-width) */ ;
    left: 4% /* var(--toggle-padding) */ ;
}

.toggle-wrapper.on::before {
    /* left: calc(100% - var(--toggle-width) - var(--toggle-padding)); */
    background-color: var(--toggle-on-knob-color);
    left: calc(100% - 38% - 5%);
}

.toggle-wrapper.off::before {
    background-color: var(--toggle-off-knob-color);
}

.toggle-wrapper.on.transparent::before {
    background-color: var(--toggle-transparent-on-knob-color);
}

.toggle-wrapper.off.transparent::before {
    background-color: var(--toggle-transparent-off-knob-color);
}

</style>