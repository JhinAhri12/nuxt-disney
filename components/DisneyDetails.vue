<template>
    <div class="card" style="width: 18rem;">
        
        <img class="card-img-top" :src="disney.imageUrl" alt="">
        <div class="card-body text-center">
            <h3>{{ disney.name }}</h3>
            <button class="btn btn-info" style="color:white">Ajouter à mes favoris</button>
        </div>
    </div>
  </template>

<script setup>
  const { disney } = defineProps(['disney'])
</script>