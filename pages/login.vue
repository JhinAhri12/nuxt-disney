<template>
    <div class="prose w-full max-w-2xl h-9">
      <h1>Log in to Disney</h1>
      <button
        class="btn btn-info"
        @click="login"
      >
        Log in with Github
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});
const login = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  });
  if (error) {
    console.error(error);
  }
};
</script>