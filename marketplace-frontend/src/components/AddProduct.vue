<template>
    <div class="add-product-form">
      <h2>{{ isEditMode ? 'Edit Product' : 'Create Product' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" placeholder="Enter product title" />
        </div>
  
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="description" placeholder="Enter product description"></textarea>
        </div>
  
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="price" placeholder="0" />
        </div>
  
        <div class="form-group">
          <label for="sellerName">Seller Name:</label>
          <input type="text" id="sellerName" v-model="sellerName" placeholder="Enter seller name" />
        </div>
  
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber" placeholder="Enter phone number" />
        </div>
  
        <div class="form-group">
          <label for="image">Image URL:</label>
          <input type="text" id="image" v-model="image" placeholder="Image URL" />
        </div>
  
        <div class="button-container">
          <button class="back-button" @click="onBack">Back</button>
          <button type="submit">{{ isEditMode ? "Change Product" : "Create" }}</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const isEditMode = ref(false);
      const title = ref('');
      const description = ref('');
      const price = ref(0);
      const sellerName = ref('');
      const phoneNumber = ref('');
      const image = ref('');
  
      onMounted(() => {
        if (route.params.id) {
          isEditMode.value = true;
          fetchProduct(route.params.id);
        }
      });
  
      const fetchProduct = async (id) => {
        try {
          const response = await axios.get(`/product/${id}`);
          const data = response.data;
  
          title.value = data.title;
          description.value = data.description;
          price.value = data.price;
          sellerName.value = data.sellerName;
          phoneNumber.value = data.phoneNumber;
          image.value = data.image || '';
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      const handleSubmit = async () => {
        try {
          const payload = {
            title: title.value,
            description: description.value,
            price: price.value,
            sellerName: sellerName.value,
            phoneNumber: phoneNumber.value,
            image: image.value,
          };
  
          if (isEditMode.value) {
            await axios.put(`/product/${route.params.id}`, payload);
            alert('Product updated successfully!');
          } else {
            await axios.post('/product', payload);
            alert('Product created successfully!');
          }
  
          router.push('/');
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
  
      const onBack = () => {
        router.push('/');
      }
  
      return {
        isEditMode,
        title,
        description,
        price,
        sellerName,
        phoneNumber,
        image,
        handleSubmit,
        onBack
      };
    }
  };
  </script>
  
  <style scoped>
  .add-product-form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .add-product-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
  }
  
  .form-group textarea {
    resize: vertical;
    height: 80px;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between; /* Spread buttons evenly */
    align-items: center; /* Align items vertically */
    margin-top: 20px; /* Add some space above the buttons */
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  
  .back-button {
    background-color: #888;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }
  </style>
  