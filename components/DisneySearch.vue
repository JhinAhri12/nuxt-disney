<template>
    
    <form @submit.prevent="onSubmit">
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <input class="button" type="submit" value="Submit"> 
    </form>
    
</template>

<script setup>
    let name = '';
    async function onSubmit (){
        if (name === '' ) {
          alert('Search is incomplete. Please fill out every field.')
          return
        }else{
            const { data: disneyCharacter } = await useFetch(`https://api.disneyapi.dev/character?name=${name}`)
            console.log(disneyCharacter)
        }
    }
</script>