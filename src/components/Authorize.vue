<template>
  <h1> Authorizing... </h1>
</template>

<script>
export default {
  name: 'authorize',
  created() {
    const token = this.$route.query.token;
    if (token) {
      localStorage.setItem('session', token);
      location.href = '/';
    } else {
      this.$router.push('Login');
    }
  },
};
</script>

<style scoped>
h1 {
  margin-left: 1em;
}
</style>
