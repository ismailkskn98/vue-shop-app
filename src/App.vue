<template>
  <appHeader />
  <router-view />
</template>

<script>
import appHeader from '@/components/appHeader.vue';
export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #262B37;

}
</style>
