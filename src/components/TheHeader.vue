<template>
  <header>
    <router-link to="/inventory" class="interactions">Inventory</router-link>
    <router-link to="/" class="main">Tracker</router-link>
    <router-link to="/about" class="interactions">About</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  background: #050a30;
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  text-decoration: none;
  color: #7ec8e3;
  font-weight: 600;
}

.main {
  font-size: 50px;
}

.interactions:focus {
  border-bottom: 2px solid white;
  transform: scale(2);
}

.interactions:hover {
  animation: linkHover 2s ease-out forwards;
}

@keyframes linkHover {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(2);
  }
}
</style>
