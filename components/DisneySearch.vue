<template>
    
    <form @submit.prevent="onSubmit">
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <input class="button" type="submit" value="Submit"> 
    </form>

    <div v-for="r in result">
        <div v-for="character in r">
            <NuxtLink :to="`/disney/${character._id}`">
                <h3 class="">{{ character.name }}</h3>
            </NuxtLink>
        </div>
    </div>
    <hr>
</template>

<script setup>
    let name = '';
    let result = '';
    async function onSubmit (){
        if (name === '' ) {
          alert('Search is incomplete. Please fill out every field.')
          return
        }else{
            const { data: disneyCharacter } = await useFetch(`https://api.disneyapi.dev/character?name=${name}`)
            result = disneyCharacter
        }
    }
</script>