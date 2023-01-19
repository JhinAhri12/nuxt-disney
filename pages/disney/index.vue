<template>
    <DisneySearch />
    <div class="col-3" v-for="d in disneys">
        <DisneyCard class="card mb-3" :disney="d" />
    </div>
    <div v-if="page === 1"> 
        Page 1 sur {{ disneys.totalPages }}
        <NuxtLink :to="`/disney?page=2`">
            Page suivante
        </NuxtLink>
    </div>
    
</template>
<script setup>
    
    let page = 1
    let nextPage = page + 1
    const { data: disneys } = await useFetch('https://api.disneyapi.dev/characters' )
    
    if (!disneys.value) {  throw createError({ statusCode: 404, statusMessage: 'Error in the api' })}
    
   
</script>