<template>
  <div>
    <the-header></the-header>
  </div>
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald400,600&display=swap');

:root {
  --primary-color: #050a30;
  --secondary-color: #000c66;
  --alternate-color: #0000ff;
  --text-color: #7ec8e3;
}

* {
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}
body {
  margin: 0;
  padding: 0;
  background: var(--alternate-color);
}
</style>
