<script setup lang="ts">
import BadgeItem from './BadgeItem.vue';
</script>

<template>
    <div>
        <h2> Badges </h2>

        <div class="list">
            <BadgeItem
                icon="house"
                label="Worked from home"
                type="info"
                :isActive="false"
            />

            <BadgeItem
                icon="pizza"
                label="Fasted for 16 hours!"
                type="success"
                :isActive="true"
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