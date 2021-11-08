<template>
  <div class="container">
    <section>
      <h1>{{ date }}</h1>
      <div class="items">
        <span>Prodotto</span>
        <span>Quantità</span>
        <span>Calorie</span>
      </div>
      <hr />
      <div class="items imp" v-for="item in items" :key="item.id">
        <span>{{ item.prodotto }}</span>
        <span>{{ item.quantita }}</span>
        <span>{{ item.calorie }}K</span>
      </div>
      <hr />
      <div class="items" id="sum">
        <span>Somma calorie</span>
        <span>{{ calculateSomma }}k</span>
      </div>
      <button type="button">Add Item</button>
    </section>
  </div>
  <modal-add v-if="showModals"></modal-add>
</template>

<script>
import ModalAdd from '../components/ModalAdd.vue';
const formattedDate = function () {
  var today = new Date();
  var date = today.toJSON().slice(0, 10);
  var nDate =
    date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
  return nDate;
};
export default {
  components: { ModalAdd },
  data() {
    return {
      date: formattedDate(),
      items: [
        {
          id: 1,
          prodotto: 'Budino',
          quantita: 2,
          calorie: '100',
        },
        {
          id: 2,
          prodotto: 'Nasello',
          quantita: 1,
          calorie: '500',
        },
        {
          id: 3,
          prodotto: 'Noci',
          quantita: 7,
          calorie: '250',
        },
        {
          id: 4,
          prodotto: 'Olio',
          quantita: 1,
          calorie: '50',
        },
      ],
      somma: 0,
      showModals: false,
    };
  },
  computed: {
    calculateSomma() {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += Number(this.items[i].calorie);
      }
      return sum;
    },
  },
  methods: {
    showModals() {
      this.showModal = true;
    },
    sendItems(products, numItems, calories) {
      this.items.push({
        id: 5,
        prodotto: products,
        quantita: numItems,
        colories: calories,
      });
    },
  },
};
</script>

<style scoped>
.items.imp {
  margin: 1rem 0;
}
button {
  height: 3rem;
  width: 50%;
  margin-top: 2rem;
  border: none;
  border-radius: 10px;
  background: var(--alternate-color);
  color: var(--text-color);
  font-weight: 600;
  font-size: 25px;
}
button:hover {
  animation: buttonAnim 1s ease-in-out forwards;
}

button:focus {
  background: var(--text-color);
  color: var(--alternate-color);
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

h1 {
  font-size: 40px;
  color: #7ec8e3;
  margin: 1rem 0;
}

hr {
  width: 90%;
  height: 2px;
  border: none;
  background: var(--alternate-color);
}

.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

span {
  color: var(--text-color);
  font-weight: 600;
}
#sum {
  color: var(--primary-color);
}

@keyframes buttonAnim {
  0% {
    background: var(--alternate-color);
    color: var(--text-color);
  }

  100% {
    background: var(--text-color);
    color: var(--alternate-color);
  }
}
</style>
