<template>
  <div>
    <h1>Dashboard Page</h1>
    <hr />
    <p>Secret page</p>
    <hr />
    <button @click="onLogout">Logout</button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dashboard Page'
});

definePageMeta({
  middleware: 'auth'
});

const onLogout = async () => {
  try {
    await $fetch('/api/logout');
    window.location.reload();
  } catch {
    alert('failed to logout');
  }
};
</script>
