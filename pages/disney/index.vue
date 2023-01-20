<template>
    <DisneySearch />
    <div class="col-3" v-for="d in disneys">
        <DisneyCard class="card mb-3" :disney="d" />
    </div>
        <div v-show="number !== 1">
            <button @click="previous">
                Page précédente
            </button>
        </div>
        Page {{ number }} sur {{ disneys.totalPages }}
        <div v-show="number !== disneys.totalPages">
            <button @click="next">
                Page suivante
            </button>
        </div>
    
</template>
<script setup>
    
    const page = ref(1);
    let number = 1; 
    const { data: disneys, pending, refresh, error } = await useFetch(() => `https://api.disneyapi.dev/characters?page=${page.value}` )
    
    if (!disneys.value) {  throw createError({ statusCode: 404, statusMessage: 'Error in the api' })}

    function previous() {  page.value--;number--;  refresh();}
    function next() {  page.value++;number++; refresh();}
</script>