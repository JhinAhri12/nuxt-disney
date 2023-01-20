<template>
    <DisneyDetails :disney="disney" />
</template>
<script setup>
  const { id } = useRoute().params
  const uri = 'https://api.disneyapi.dev/characters/' + id

  const { data: disney } = await useFetch(uri, { key: id })
  if (!disney.value) {
    throw createError({ statusCode: 404, statusMessage: 'Character not found' })
  }

</script>