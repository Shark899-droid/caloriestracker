<template>
  <div class="containerModal">
    <section>h1</section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.containerModal {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0);
  opacity: 0.6;
}

section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: var(--secondary-color);
}
</style>
