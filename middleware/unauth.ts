export default defineNuxtRouteMiddleware(() => {
  const auth = useStateAuth();

  if (auth.value) {
    return navigateTo('/dashboard');
  }
});
