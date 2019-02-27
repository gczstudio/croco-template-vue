<template>
  <div id="app">
    <img src="@/assets/images/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/router">Router</router-link>
      <router-link to="/table">Table</router-link>
    </p>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p a {
  margin: 0px 10px;
  text-decoration: underline;
}
</style>
