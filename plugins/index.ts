export default defineNuxtPlugin((ctx) => {
  if (!process.server) return;

  const auth = useStateAuth();

  auth.value = ctx.ssrContext?.event.context.auth || null;
});
