<template>
  <div>
    <h1>Login</h1>
    <hr />

    <fieldset>
      <label>Username</label>
      <input v-model="form.username" type="text" placeholder="Enter username" />
      <br />
      <label>Password</label>
      <input v-model="form.password" type="text" placeholder="Enter password" />
      <br />
      <button @click="onLogin">Login</button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Login'
});

definePageMeta({
  middleware: 'unauth'
});

const form = reactive({
  username: '',
  password: ''
});

const onLogin = async () => {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: form
    });

    window.location.replace('/dashboard');
  } catch {
    alert('failed to login');
  }
};
</script>
