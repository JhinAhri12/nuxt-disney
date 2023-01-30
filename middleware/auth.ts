export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
  
    return navigateTo(`/login?redirectTo=${to.path}`);
  });