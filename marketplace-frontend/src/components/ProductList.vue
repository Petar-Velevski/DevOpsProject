<template>
    <div class="product-list-container">
      <div class="button-wrapper">
        <button class="add-listing-button" @click="goToAddProduct">Create a new listing</button>
      </div>
      <div class="product-list">
        <ProductItem v-for="product in products" :key="product._id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductItem from './ProductItem.vue';
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: {
      ProductItem
    },
    setup() {
      const store = useStore();
      const router = useRouter();
  
      store.dispatch('fetchProducts');
  
      const products = computed(() => store.getters.allProducts);
  
      const goToAddProduct = () => {
          router.push('/add-product');
      };
      return {
        products,
        goToAddProduct
      };
    }
  };
  </script>
  
  <style scoped>
  .product-list-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .add-listing-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
  
  .add-listing-button:hover {
    background-color: #0056b3;
  }
  
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }
  </style>
  