<script setup lang="ts">
import BadgeItem from './BadgeItem.vue';
</script>

<template>
    <div>
        <h2> Badges </h2>

        <div>
            <BadgeItem
                icon=""
                label="Worked from home"
                :isEnabled="false"
            />

            <BadgeItem
                icon=""
                label="Fasted for 16 hours!"
                :isEnabled="false"
            />
        </div>
    </div>
</template>

<styles scoped>

</styles>