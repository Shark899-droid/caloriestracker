<template>
  <div class="container">
    <section>
      <h1>ADD ITEM</h1>
      <label for="product">Product</label>
      <input type="text" name="product" v-model="products" />
      <label for="numItems">Number of Items</label>
      <input type="number" name="numItems" v-model="numItems" />
      <label for="calories">Calories</label>
      <input type="text" name="calories" v-model="calories" />
      <button type="button" @click="sendItems">ADD</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: '',
      numItems: null,
      calories: '',
    };
  },
  methods: {},
};
</script>

<style scoped>
button {
  height: 2.5rem;
  width: 30%;
  border-radius: 10px;
  background: var(--alternate-color);
  border: none;
}
input {
  width: 90%;
  height: 2rem;
  margin-bottom: 2rem;
}

label {
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 1rem;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

section {
  width: 50%;
  padding: 2rem;
  background: var(--secondary-color);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
