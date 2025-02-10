<template>
    <div class="product">
      <div class="image-container">
        <img :src="product.image" :alt="product.title" v-if="product.image" class="product-image">
        <img src="https://via.placeholder.com/250" :alt="product.title" v-else class="product-image">
      </div>
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">${{ product.price }}</p>
      <router-link :to="{ name: 'ProductDetails', params: { id: product._id } }" class="show-more-button">Show More</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .product {
    border: 1px solid #ddd;
    text-align: center;
    background-color: #fff;
    border-radius: 0.25rem;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .image-container {
    margin-bottom: 5px;
  }
  
  .product-image {
    width: 200px; /* Fixed width */
    height: 200px; /* Fixed height */
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
  }
  
  .product-title {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    color: #333;
  }
  
  .product-price {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  .show-more-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    font-size: 1rem;
    align-self: stretch;
    transition: background-color 0.2s ease;
    text-decoration: none; /* Remove underline */
  }
  
  .show-more-button:hover {
    background-color: #0056b3;
  }
  </style>
  