<template>
  <div id="app">
    <div class="container">
      <MyHeader />
      <router-view :products="products"/>
      <footer>DevOps project</footer>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import axios from 'axios';

export default {
  components: {
    MyHeader,
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/product'); //  Your API endpoint
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async updateProducts(){
        this.fetchProducts();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.container {
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full height */
}

footer {
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 10px;
  font-size: 0.8rem;
  color: #666;
  border-top: 1px solid #ddd; /* Add a top border */
}
</style>
