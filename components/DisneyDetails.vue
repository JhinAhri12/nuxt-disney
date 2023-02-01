<template>
    <div class="card" style="width: 18rem;">
        
        <img class="card-img-top" :src="disney.imageUrl" alt="">
        <div class="card-body text-center">
            <h3>{{ disney.name }}</h3>
            <button class="btn btn-info" style="color:white" @click="addToFavorite">Ajouter à mes favoris</button>
        </div>
    </div>
  </template>

<script setup>
  const { disney } = defineProps(['disney'])

 const addToFavorite = computed( () => {

  try {
        await $fetch(
          `/api/disney/favorite`,
          {
            method: 'POST'
          }
        );
      } catch (error) {
        console.error(error);
      }



</script>