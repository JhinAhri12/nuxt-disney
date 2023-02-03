<template>
    <div
      v-if="user"
      class=""
    >
      <img
        class=""
        :src="profile"
      />
      <div class="">
        <div class="">{{ name }}</div>
        <button
          class="btn btn-info"
          @click="logout"
        >
          Log out
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const user = useSupabaseUser();
  const { auth } = useSupabaseClient();
  const logout = async () => {
    const { error } = await auth.signOut();
    if (error) {
      console.error(error);
      return;
    }
    // The Nuxt Supabase auth *should* be doing this
    // for us, but it isn't for some reason.
    try {
      await $fetch('/api/_supabase/session', {
        method: 'POST',
        body: { event: 'SIGNED_OUT', session: null },
      });
      user.value = null;
    } catch (e) {
      console.error(error);
    }
    await navigateTo('/login');
  };
  const name = computed(
    () => user.value?.email
  );
  const profile = computed(
    () => user.value?.user_metadata.avatar_url
  );
  </script>