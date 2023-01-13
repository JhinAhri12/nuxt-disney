<template>
    
    <div v-for="d in disney">
        <NuxtLink :to="`/disney/${d._id}`">
            <h3 class="">{{ d.name }}</h3>
        </NuxtLink>
    </div>
    
</template>

<script setup>
    const { disney } = defineProps(['disney'])
</script>