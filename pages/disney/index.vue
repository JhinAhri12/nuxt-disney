<template>
    <DisneySearch />
    <div class="col-3" v-for="d in disneys">
        <DisneyCard class="card mb-3" :disney="d" />
    </div>
</template>
<script setup>
    const { data: disneys } = await useFetch('https://api.disneyapi.dev/characters' )
   
</script>