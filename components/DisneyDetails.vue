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
import { useFavoriteStore } from '~/stores/disneyFavorite.ts';
import { Favorite } from '@prisma/client';

  const favoriteStore = useFavoriteStore();
  const { disney } = defineProps(['disney'])

  function addToFavorite() {
    funcFavorite();
  }

async function funcFavorite() {

    const { favorite } = await  await $fetch(`/api/disney/favorite/`, {
        method: 'POST',
        body: { event: 'ADD_FAVORITE', 'postName': disney.name, 'postUserId': 1 },

      })
  
 }
 
</script>