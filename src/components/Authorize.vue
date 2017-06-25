<template>
  <h1> Authorizing... </h1>
</template>

<script>
export default {
  name: 'authorize',
  created() {
    const token = this.$route.query.token;
    let route = 'Login';
    if (token) {
      localStorage.setItem('session', token);
      route = '/';
    }
    this.$router.push(route);
  },
};
</script>

<style scoped>
h1 {
  margin-left: 1em;
}
</style>
