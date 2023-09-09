<template>
  <div>
    <h1>Home Page</h1>
    <hr />
    <NuxtLink to="/login">Go To Login</NuxtLink>
    <br />
    <NuxtLink to="/dashboard">Go To Dashboard</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home Page'
});
</script>
