<template>
    
    <form @submit.prevent="onSubmit">
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <input class="button" type="submit" value="Submit"> 
    </form>

    <div v-show="search">
        <div v-for="r in result">  
            <div v-for="character in r">
                <NuxtLink :to="`/disney/${character._id}`">
                    <h3 class="">{{ character.name }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>

    <hr>
</template>

<script setup>
    let name = '';
    let search = false;

    const page = ref(1);
    const { data: result, pending, refresh, error } = await useFetch(() => `https://api.disneyapi.dev/character?name=${page.value}`)

    function onSubmit ()
    {
        search = true;
        page.value = name;
        refresh();
    }
    
</script>