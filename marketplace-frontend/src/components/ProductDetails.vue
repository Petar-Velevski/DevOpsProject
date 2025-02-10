<template>
    <div v-if="product" class="product-details">
      <div class="product-section">
        <div class="image-container">
          <img :src="product.image" :alt="product.title" class="product-image">
        </div>
        <div class="details-container">
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">Price: ${{ product.price }}</p>
        </div>
      </div>
  
      <div class="seller-info">
        <span class="seller-name">Seller: {{ product.sellerName }}</span>
        <span class="seller-contact">Contact: {{ product.phoneNumber }}</span>
      </div>
  
      <div class="button-separator"></div>
  
      <div class="button-container">
        <button @click="goBack" class="back-button">Back</button>
        <div class="edit-delete-buttons">
        <button @click="$router.push({ name: 'EditProduct', params: { id: product._id } })" class="edit-button">Edit</button>
        <button @click="deleteProduct" class="delete-button">Delete</button>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const productId = ref(route.params.id);
      const product = ref(null);
  
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/product/${productId.value}`);
          product.value = response.data;
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      const goBack = () => {
        router.push('/');
      };
  
      const editProduct = () => {
        router.push({ name: 'AddProduct', params: { id: productId.value } });
      };
  
      const deleteProduct = async () => {
        if (confirm('Are you sure you want to delete this product?')) {
          try {
            await axios.delete(`http://localhost:3000/product/${productId.value}`);
            alert('Product deleted successfully!');
            router.push('/');
          } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product.');
          }
        }
      };
  
      onMounted(fetchProduct);
  
      return { product, goBack, editProduct, deleteProduct };
    },
  };
  </script>
  
  <style scoped>
  .product-details {
      font-family: Arial, sans-serif;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      max-width: 800px;
      margin: 20px auto;
      background-color: #f9f9f9;
  }
  
  .product-section {
      display: flex;
      margin-bottom: 20px;
  }
  
  .image-container {
      width: 50%;
      height: 250px;
      margin-right: 20px;
      overflow: hidden;
      flex-shrink: 0;
  }
  
  .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .details-container {
      width: 35%;
      flex-shrink: 0;
  }
  
  .product-title {
      font-size: 2em;
      color: #333;
      margin-bottom: 10px;
  }
  
  .product-description {
      font-size: 1.1em;
      color: #555;
      margin-bottom: 15px;
  }
  
  .product-price {
      font-size: 1.2em;
      font-weight: bold;
      color: #444;
      margin-bottom: 20px;
  }
  
  .seller-info {
      color: #777;
      font-size: 1em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px 0;
  }
  
  .seller-name {
      margin-right: 10px;
  }
  
  /* Add a line/border above the buttons */
  .button-separator {
      border-top: 1px solid #ddd;
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
  .button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .back-button,
  .edit-button,
  .delete-button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s ease;
  }
  
  .back-button {
      background-color: #888;
      color: white;
  }
  
  .edit-delete-buttons {
      display: flex;
  }
  
  .edit-button {
      background-color: #007BFF;
      color: white;
      margin-left: 5px;
  }
  
  .delete-button {
      background-color: #DC3545;
      color: white;
      margin-left: 5px;
  }
  
  .back-button:hover,
  .edit-button:hover,
  .delete-button:hover {
      opacity: 0.8;
  }
  </style>
  