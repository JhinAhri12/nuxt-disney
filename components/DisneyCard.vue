<template>
    
    <NuxtLink :to="`/disney/${disney.id}`">

        <h3 class="card-title text-center">{{ disney.title }}</h3>
        <img class="card-img-bottom product-img mx-auto mb-2 img-thumbnail" :src="disney.image" alt="">
    </NuxtLink>
</template>

<script setup>
    const { disney } = defineProps(['disney'])
    
</script>